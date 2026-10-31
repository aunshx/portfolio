/** A star drawn as an SVG, so it's part of the type, not an emoji. */
function Star() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="marquee-star">
      <path d="M12 0c.7 6.3 5.7 11.3 12 12-6.3.7-11.3 5.7-12 12-.7-6.3-5.7-11.3-12-12C6.3 11.3 11.3 6.3 12 0Z" />
    </svg>
  );
}

const ITEMS = ["Full-stack", "Applied AI", "Yes, including the CSS"];

/**
 * A giant italic band that runs sideways. It drifts on its own (CSS) and
 * Motion.tsx speeds it up, or reverses it, with the scroll.
 */
export default function Marquee() {
  const run = (
    <span className="marquee-run">
      {ITEMS.map((t) => (
        <span key={t} className="marquee-item">
          {t}
          <Star />
        </span>
      ))}
    </span>
  );
  return (
    <div className="marquee-band" aria-label={ITEMS.join(", ")} role="img">
      <div className="marquee-track" data-marquee>
        {run}
        {run}
        {run}
        {run}
      </div>
    </div>
  );
}
