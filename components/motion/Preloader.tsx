/**
 * The loading screen: a counter to 100 and three status lines, then a wipe
 * up into the page. Pure CSS, shown only on the first home page visit of a
 * session (the `intro` class from the layout's bootstrap script), so it
 * never waits on JavaScript and never comes back on the same visit.
 */
export default function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-lines">
        <span>Plotting contours</span>
        <span>Untangling the CSS</span>
        <span>Hiding the bugs</span>
        <span>Ready, probably</span>
      </div>
      <div className="preloader-count">
        <span className="preloader-n" />
        <span className="preloader-pct">%</span>
      </div>
    </div>
  );
}
