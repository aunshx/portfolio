import { EXPERIENCE } from "./experience";
import { toSurvey } from "./places";

/**
 * The career route: a trail switching back across the land, one stop per
 * job, newest nearest, like a résumé. The loading screen draws it on its
 * survey map; the 3D hero lays it over the terrain, where it runs back from
 * the camera through older jobs and fades out toward the horizon.
 *
 * Points are on the land (terrain units, see places.ts), placed so the hero's
 * camera sees every leg. The map's trail starts below its bottom edge (the
 * lead-in); the hero's starts at the first job and runs on into the tail.
 */
type Pt = [number, number];
const LEAD_IN: Pt = [-0.75, 0.9];
/* x, z, and which side the label sits on the map and in the hero. Nearest
   first; the jobs fill them newest first. */
const JOBS: [number, number, "l" | "r", "l" | "r"][] = [
  [-0.59, -0.67, "l", "l"],
  [-0.01, -1.58, "r", "r"],
  [-0.59, -2.35, "l", "l"],
  [-0.07, -3.13, "r", "r"],
];
const TAIL: Pt = [-0.51, -5.17];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Jul 2021 – Jul 2022" → "2021–22 · 1 yr" */
function when(duration: string) {
  const [a, b] = duration.split("–").map((s) => s.trim().split(" "));
  const [m1, y1, m2, y2] = [MONTHS.indexOf(a[0]), Number(a[1]), MONTHS.indexOf(b[0]), Number(b[1])];
  const months = (y2 - y1) * 12 + (m2 - m1) + 1;
  const span = y1 === y2 ? `${y1}` : `${y1}–${String(y2).slice(2)}`;
  const length = months < 12 ? `${months} mo` : `${Math.round(months / 12)} yr${months >= 18 ? "s" : ""}`;
  return `${span} · ${length}`;
}

/* One Catmull-Rom curve through every knot, as cubic Bézier segments, so the
   map and the hero share the exact same trail. */
const KNOTS: Pt[] = [LEAD_IN, ...JOBS.map(([x, z]): Pt => [x, z]), TAIL];
const SEGMENTS = KNOTS.slice(0, -1).map((_, i) => {
  const [p0, p1, p2, p3] = [KNOTS[i - 1] ?? KNOTS[i], KNOTS[i], KNOTS[i + 1], KNOTS[i + 2] ?? KNOTS[i + 1]];
  return [p1, [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6], p2] as Pt[];
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

/* The hero: first job to the end of the tail. */
const heroWalk = walk(SEGMENTS.slice(1));

/** The hero's trail on the land, and where along it (0 to 1) the tail starts fading. */
export const ROUTE_GROUND = heroWalk.pts.map(([x, z]) => [Math.round(x * 1000) / 1000, Math.round(z * 1000) / 1000] as Pt);
export const ROUTE_FADE_FROM = heroWalk.ends[JOBS.length - 2] / heroWalk.length;

/** Each job: where it sits on the land and the map, and how far along each trail. */
export const STOPS = EXPERIENCE.map((job, i) => {
  const [x, z, side, heroSide] = JOBS[i];
  const map = toSurvey(x, z);
  return {
    name: job.short ?? job.name,
    when: when(job.duration),
    x,
    z,
    X: map.x,
    Y: map.y,
    side,
    heroSide,
    /** 0 at the start of the map's trail, 1 at the end. */
    at: mapWalk.ends[i] / mapWalk.length,
    /** The same along the hero's trail, which starts at the first job. */
    heroAt: i === 0 ? 0 : heroWalk.ends[i - 1] / heroWalk.length,
  };
});
