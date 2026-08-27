const WASHES = ["top", "work", "experience", "skills", "writing", "contact"];

/**
 * The page as a technical drawing: column guides, margin dimension ticks,
 * corner registration marks, grain, and one soft ambient wash per section.
 *
 * Only a single wash is visible at a time and they cross-fade on the root's
 * data-section attribute, so the colour shifts as you move down the page
 * without several faint layers muddying each other.
 *
 * Server component. Ships no JavaScript; every animation is a CSS keyframe
 * on transform or opacity.
 */
export default function PageBackdrop() {
  return (
    <div className="blueprint" aria-hidden="true">
      {WASHES.map((s) => (
        <div key={s} className="bp-wash" data-for={s} />
      ))}

      <div className="bp-scrim" />

      {/* Hairlines marking the edges of the content column. */}
      <div className="bp-column" />

      {/* Light running down each guide, offset from one another. */}
      <span className="bp-trace bp-trace-l" />
      <span className="bp-trace bp-trace-r" />

      {/* Dimension ticks down both margins. */}
      <div className="bp-ticks bp-ticks-left" />
      <div className="bp-ticks bp-ticks-right" />

      {/* Registration marks, one per corner. */}
      <span className="bp-reg bp-reg-tl" />
      <span className="bp-reg bp-reg-tr" />
      <span className="bp-reg bp-reg-bl" />
      <span className="bp-reg bp-reg-br" />

      <div className="bp-grain" />
    </div>
  );
}
