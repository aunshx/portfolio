/**
 * One paragraph that lights up word by word as it scrolls through
 * (Motion.tsx). Without the script it is simply there.
 */
const PARTS: { text: string; serif?: boolean }[] = [
  { text: "I build products end to end: the agent, the API, the database, and the pixels people actually touch." },
  { text: "Lately that’s FRED, an AI that answers questions about land and shows its work." },
  { text: "Also, yes, the CSS.", serif: true },
];

export default function Statement() {
  return (
    <section aria-label="About" className="statement">
      <p className="statement-text" data-words>
        {PARTS.map((part, i) =>
          part.text.split(" ").map((w, j) => (
            <span key={`${i}-${j}`} className={`word ${part.serif ? "serif-word" : ""}`}>
              {w}{" "}
            </span>
          )),
        )}
      </p>
    </section>
  );
}
