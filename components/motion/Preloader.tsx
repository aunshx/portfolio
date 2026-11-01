import { WORK } from "@/content/work";
import { PLACES, SURVEY, toSurvey } from "@/content/places";
import { ROUTE_D, STOPS } from "@/content/route";

const MID = SURVEY.w / 2;

/** Projects, as pins on the land. */
const PINS = WORK.map((w) => ({ title: w.title, ...toSurvey(PLACES[w.title].x, PLACES[w.title].z) }));

/* The trail draws at an even pace (it starts below the map's edge), and each
   job's stop appears as the trail reaches it. */
const ROUTE_START = 0.1, ROUTE_TIME = 1.3;

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
                  d={ROUTE_D}
                  pathLength={1}
                  className="pre-route-reveal"
                  style={{ ["--t" as string]: `${ROUTE_TIME}s`, ["--d" as string]: `${ROUTE_START}s` }}
                />
              </mask>
            </defs>
            <path d={ROUTE_D} className="pre-route" mask="url(#pre-route-mask)" />

            {STOPS.map((s) => {
              const x = s.side === "r" ? 15 : -15;
              return (
                <g
                  key={s.name}
                  transform={`translate(${s.X} ${s.Y})`}
                  style={{ ["--d" as string]: `${(ROUTE_START + ROUTE_TIME * s.at).toFixed(2)}s` }}
                >
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
