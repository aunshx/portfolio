import { EXPERIENCE } from "./experience";
import { fromSurvey } from "./places";

/**
 * The career route: a trail up the land, one stop per job, oldest first.
 * Drawn on the loading screen's survey map and painted onto the 3D hero, so
 * both show the same trail in the same place.
 *
 * Points are on the survey map (1600 × 900, see places.ts). The trail enters
 * from below the map's bottom edge, where the land runs on toward the viewer.
 * Stops stay in the middle band, so phones (which crop the sides) keep them.
 */
const START: [number, number] = [705, 1160];
/* x, y on the map; which side the label sits on the map, and in the 3D hero
   (the camera's angle moves things around, so they differ). */
const STOP_AT: [number, number, "l" | "r", "l" | "r"][] = [
  [650, 705, "r", "r"],
  [935, 590, "l", "r"],
  [700, 450, "r", "r"],
  [835, 268, "r", "r"],
];

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

type Pt = [number, number];
const KNOTS: Pt[] = [START, ...STOP_AT.map(([x, y]): Pt => [x, y])];

/* A Catmull-Rom curve through the knots, as cubic Bézier segments. */
const SEGMENTS = KNOTS.slice(0, -1).map((_, i) => {
  const [p0, p1, p2, p3] = [KNOTS[i - 1] ?? KNOTS[i], KNOTS[i], KNOTS[i + 1], KNOTS[i + 2] ?? KNOTS[i + 1]];
  const c1: Pt = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
  const c2: Pt = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
  return [p1, c1, c2, p2] as const;
});

/** The trail as an SVG path on the survey map. */
export const ROUTE_D =
  `M${START[0]} ${START[1]}` +
  SEGMENTS.map(([, c1, c2, p]) => `C${c1.map(Math.round).join(" ")} ${c2.map(Math.round).join(" ")} ${p.join(" ")}`).join("");

/* Sampled evenly in t, with the distance walked so far. */
const STEPS = 48;
const samples: Pt[] = [START];
const walked: number[] = [0];
const stopAt: number[] = [];
SEGMENTS.forEach(([a, b, c, d]) => {
  for (let s = 1; s <= STEPS; s++) {
    const t = s / STEPS, u = 1 - t;
    const p: Pt = [
      u * u * u * a[0] + 3 * u * u * t * b[0] + 3 * u * t * t * c[0] + t * t * t * d[0],
      u * u * u * a[1] + 3 * u * u * t * b[1] + 3 * u * t * t * c[1] + t * t * t * d[1],
    ];
    const q = samples[samples.length - 1];
    walked.push(walked[walked.length - 1] + Math.hypot(p[0] - q[0], p[1] - q[1]));
    samples.push(p);
  }
  stopAt.push(walked[walked.length - 1]);
});
const LENGTH = walked[walked.length - 1];

/** The trail on the land itself (terrain units), for the 3D hero. It starts
 *  at the first job: the lead-in from the map's edge would sit right in front
 *  of the camera there, and come out huge. */
export const ROUTE_GROUND = samples.slice(STEPS).map(([X, Y]) => {
  const { x, z } = fromSurvey(X, Y);
  return [Math.round(x * 1000) / 1000, Math.round(z * 1000) / 1000] as Pt;
});

/** Each job: where it sits on the map and the land, and how far along the trail. */
export const STOPS = [...EXPERIENCE].reverse().map((job, i) => {
  const [X, Y, side, heroSide] = STOP_AT[i];
  return {
    name: job.short ?? job.name,
    when: when(job.duration),
    X,
    Y,
    side,
    heroSide,
    ...fromSurvey(X, Y),
    /** 0 at the start of the map's trail, 1 at the end. */
    at: stopAt[i] / LENGTH,
    /** The same along the hero's trail, which starts at the first job. */
    heroAt: (stopAt[i] - stopAt[0]) / (LENGTH - stopAt[0]),
  };
});
