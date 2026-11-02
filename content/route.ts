import { EXPERIENCE } from "./experience";
import { toSurvey } from "./places";

/**
 * The career route: a trail switching back across the land, one stop per
 * job, newest nearest, like a résumé. The loading screen draws it on its
 * survey map; the 3D hero draws it over the terrain, where it runs back from
 * the camera through older jobs and fades out toward the horizon.
 *
 * Points are on the land (terrain units, see places.ts), placed so the hero's
 * camera sees every leg. The map's trail starts below its bottom edge (the
 * lead-in); the hero's starts at the first job and runs on into the tail.
 */
type Pt = [number, number];
const LEAD_IN: Pt = [-0.75, 0.9];
/* x, z, and which side the label sits on the map and in the hero. Nearest
   first; the jobs fill them newest first. Solved against the hero's camera at
   rest so the stops climb the screen evenly, about 90 px apart, in two columns
   right of the legend; the far land is squashed, so the gaps grow on the ground. */
const JOBS: [number, number, "l" | "r", "l" | "r"][] = [
  [-0.32, -0.46, "l", "l"],
  [0.36, -1.32, "r", "r"],
  [-0.4, -2.1, "l", "l"],
  [0.42, -2.52, "r", "r"],
  [-0.46, -3.42, "l", "l"],
];
const TAIL: Pt = [0.1, -6.2];

/** "Jul 2021 – Jul 2022" → "2021–22" */
function when(duration: string) {
  const [y1, y2] = duration.split("–").map((s) => s.trim().split(" ")[1]);
  return y1 === y2 ? y1 : `${y1}–${y2.slice(2)}`;
}

/* One smooth curve through every knot, as cubic Bézier segments, so the map
   and the hero share the exact same trail. Each knot's tangent points from its
   neighbour behind to its neighbour ahead (as in Catmull-Rom), but the handles
   are a fixed share of the segment they shape, so a short leg next to a long
   one can't overshoot: every stop reads as a clean switchback turn. */
const KNOTS: Pt[] = [LEAD_IN, ...JOBS.map(([x, z]): Pt => [x, z]), TAIL];
const tangent = (i: number): Pt => {
  const a = KNOTS[i - 1] ?? KNOTS[i], b = KNOTS[i + 1] ?? KNOTS[i];
  const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
  return [(b[0] - a[0]) / l, (b[1] - a[1]) / l];
};
const SEGMENTS = KNOTS.slice(0, -1).map((_, i) => {
  const [p1, p2, t1, t2] = [KNOTS[i], KNOTS[i + 1], tangent(i), tangent(i + 1)];
  const h = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) * 0.4;
  return [p1, [p1[0] + t1[0] * h, p1[1] + t1[1] * h], [p2[0] - t2[0] * h, p2[1] - t2[1] * h], p2] as Pt[];
});

const bez = ([a, b, c, d]: Pt[], t: number): Pt => {
  const u = 1 - t;
  return [
    u * u * u * a[0] + 3 * u * u * t * b[0] + 3 * u * t * t * c[0] + t * t * t * d[0],
    u * u * u * a[1] + 3 * u * u * t * b[1] + 3 * u * t * t * c[1] + t * t * t * d[1],
  ];
};

/** Samples along some segments, with the distance walked to the end of each. */
function walk(segs: Pt[][]) {
  const pts: Pt[] = [segs[0][0]];
  const ends: number[] = [];
  let walked = 0;
  for (const seg of segs) {
    for (let s = 1; s <= 48; s++) {
      const p = bez(seg, s / 48), q = pts[pts.length - 1];
      walked += Math.hypot(p[0] - q[0], p[1] - q[1]);
      pts.push(p);
    }
    ends.push(walked);
  }
  return { pts, ends, length: walked };
}

/* The map: lead-in to the last job. */
const MAP_SEGS = SEGMENTS.slice(0, JOBS.length);
const mapWalk = walk(MAP_SEGS);
const m = (p: Pt) => {
  const s = toSurvey(p[0], p[1]);
  return `${s.x} ${s.y}`;
};
/** The trail as an SVG path on the survey map. */
export const ROUTE_D = `M${m(MAP_SEGS[0][0])}` + MAP_SEGS.map(([, c1, c2, p]) => `C${m(c1)} ${m(c2)} ${m(p)}`).join("");

/** Where the hero's trail fades out, past the oldest job. The hero lays its
    own line through the stops (see TerrainField). */
export const ROUTE_TAIL = TAIL;

/** Each job: where it sits on the land and the map, and how far along each trail. */
export const STOPS = EXPERIENCE.map((job, i) => {
  const [x, z, side, heroSide] = JOBS[i];
  const map = toSurvey(x, z);
  return {
    name: job.short ?? job.name,
    /** The title without its qualifier: "Technical Analyst (Founder’s Office)" → "Technical Analyst". */
    role: job.position.split(/[,(]/)[0].trim(),
    when: when(job.duration),
    x,
    z,
    X: map.x,
    Y: map.y,
    side,
    heroSide,
    /** 0 at the start of the map's trail, 1 at the end. */
    at: mapWalk.ends[i] / mapWalk.length,
  };
});
