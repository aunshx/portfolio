import { CONTOURS } from "@/content/contours";

/**
 * Topographic lines behind the hero. Each path draws itself on load (CSS,
 * staggered by --d), then the whole field drifts on scroll (Motion.tsx).
 */
export default function Contours() {
  return (
    <svg
      aria-hidden="true"
      data-contours
      className="contours-svg"
      viewBox={`0 0 ${CONTOURS.w} ${CONTOURS.h}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {CONTOURS.paths.map((d, i) => (
        <path
          key={i}
          d={d}
          pathLength={1}
          className="contour-path"
          // A fixed pseudo-random order, so server and client agree.
          style={{ ["--d" as string]: `${((i * 37) % CONTOURS.paths.length) * 0.045}s` }}
        />
      ))}
    </svg>
  );
}
