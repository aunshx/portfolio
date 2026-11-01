import { WORK } from "@/content/work";
import { EXPERIENCE } from "@/content/experience";
import { PLACES, SURVEY, toSurvey } from "@/content/places";

const MID = SURVEY.w / 2;

/** Projects, as pins on the land. */
const PINS = WORK.map((w) => ({ title: w.title, ...toSurvey(PLACES[w.title].x, PLACES[w.title].z) }));

/* The career route: a trail up the map, one stop per job, oldest first.
   Stops stay in the middle band so phones (which crop the sides) keep them. */
const STOP_AT: [number, number, "l" | "r"][] = [
  [650, 705, "r"],
  [905, 590, "l"],
  [700, 450, "r"],
  [835, 268, "r"],
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

const STOPS = [...EXPERIENCE].reverse().map((job, i) => ({
  name: job.short ?? job.name,
  when: when(job.duration),
  x: STOP_AT[i][0],
  y: STOP_AT[i][1],
  side: STOP_AT[i][2],
}));

/** A smooth trail through the stops, entering from the bottom edge. */
const TRAIL: [number, number][] = [[700, SURVEY.h + 30], ...STOPS.map((s): [number, number] => [s.x, s.y])];
function smooth(pts: [number, number][]) {
  const c = (n: number) => Math.round(n);
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [p0, p1, p2, p3] = [pts[i - 1] ?? pts[i], pts[i], pts[i + 1], pts[i + 2] ?? pts[i + 1]];
    d += `C${c(p1[0] + (p2[0] - p0[0]) / 6)} ${c(p1[1] + (p2[1] - p0[1]) / 6)} ${c(p2[0] - (p3[0] - p1[0]) / 6)} ${c(p2[1] - (p3[1] - p1[1]) / 6)} ${p2[0]} ${p2[1]}`;
  }
  return d;
}
const ROUTE = smooth(TRAIL);

/* Each stop appears as the trail reaches it (the trail draws at an even pace). */
const ROUTE_START = 0.3, ROUTE_TIME = 1.2;
const legs = TRAIL.slice(1).map((p, i) => Math.hypot(p[0] - TRAIL[i][0], p[1] - TRAIL[i][1]));
const total = legs.reduce((a, b) => a + b, 0);
const arrive = legs.map((_, i) => ROUTE_START + (ROUTE_TIME * legs.slice(0, i + 1).reduce((a, b) => a + b, 0)) / total);

/**
 * The loading screen is a survey of the land the hero stands on: its contour
 * lines draw in from the valleys up (an animated SVG, the same terrain as the
 * 3D hero seen from above), the career route walks up through each job, the
 * projects get plotted as pins, then the sheet tilts back into perspective
 * and dissolves into the real landscape.
 *
 * Pure CSS, shown only on the first home page visit of a session (the `intro`
 * class from the layout's bootstrap script), so it never waits on JavaScript
 * and never comes back on the same visit.
 */
export default function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="pre-paper" />
      <div className="pre-map">
        <div className="pre-map-zoom">
          {/* An image, not inline SVG, so its 170 paths stay out of the page's HTML. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/survey.svg" alt="" className="pre-map-img" fetchPriority="high" />
          <svg viewBox={`0 0 ${SURVEY.w} ${SURVEY.h}`} preserveAspectRatio="xMidYMid slice" className="pre-pins">
            <defs>
              <mask id="pre-route-mask" maskUnits="userSpaceOnUse">
                <path
                  d={ROUTE}
                  pathLength={1}
                  className="pre-route-reveal"
                  style={{ ["--t" as string]: `${ROUTE_TIME}s`, ["--d" as string]: `${ROUTE_START}s` }}
                />
              </mask>
            </defs>
            <path d={ROUTE} className="pre-route" mask="url(#pre-route-mask)" />

            {STOPS.map((s, i) => {
              const x = s.side === "r" ? 15 : -15;
              return (
                <g key={s.name} transform={`translate(${s.x} ${s.y})`} style={{ ["--d" as string]: `${arrive[i].toFixed(2)}s` }}>
                  <rect x="-5.5" y="-5.5" width="11" height="11" className="pre-stop-mark" />
                  <text
                    x={x}
                    y="-1"
                    textAnchor={s.side === "r" ? "start" : "end"}
                    className="pre-stop-label"
                    style={{ ["--dx" as string]: s.side === "r" ? "-6px" : "6px" }}
                  >
                    <tspan className="pre-stop-name">{s.name}</tspan>
                    <tspan x={x} dy="17" className="pre-stop-when">
                      {s.when}
                    </tspan>
                  </text>
                </g>
              );
            })}

            {PINS.map((p, i) => (
              <g
                key={p.title}
                transform={`translate(${p.x} ${p.y})`}
                className={Math.abs(p.x - MID) > 200 ? "pre-pin-edge" : undefined}
                style={{ ["--i" as string]: i }}
              >
                <circle r="26" className="pre-pin-ring" />
                <circle r="7" className="pre-pin-dot" />
                {/* Labels face the middle; phones crop the sides and skip the outer pins. */}
                <text
                  x={p.x > MID ? -16 : 16}
                  y="5"
                  textAnchor={p.x > MID ? "end" : "start"}
                  className="pre-pin-label"
                  style={{ ["--dx" as string]: p.x > MID ? "6px" : "-6px" }}
                >
                  {p.title}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      <span className="pre-neat" />

      <div className="pre-foot">
        <p className="pre-lines">
          <span>Plotting contours</span>
          <span>Untangling the CSS</span>
          <span>Hiding the bugs</span>
          <span>Ready, probably</span>
        </p>
        <p className="pre-count">
          <span className="preloader-n" />
          <span className="pre-pct">%</span>
        </p>
      </div>
    </div>
  );
}
