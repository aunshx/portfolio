const STOPS = [
  [0x00, 0x91, 0xff],
  [0x7c, 0x5c, 0xff],
  [0x00, 0xc2, 0xb2],
] as const;

/** Colour for character i of n, interpolated across the tone stops. */
function rampColor(i: number, n: number) {
  if (n <= 1) return `rgb(${STOPS[0].join(",")})`;
  const t = (i / (n - 1)) * (STOPS.length - 1);
  const seg = Math.min(Math.floor(t), STOPS.length - 2);
  const f = t - seg;
  const a = STOPS[seg];
  const b = STOPS[seg + 1];
  const mix = a.map((c, k) => Math.round(c + (b[k] - c) * f));
  return `rgb(${mix.join(",")})`;
}

/**
 * Letter-by-letter rise-in, staggered.
 *
 * Characters are inline-block so they can be transformed, which would
 * otherwise let the line break mid-word. Each word is therefore wrapped in a
 * nowrap box, so breaks only happen at spaces the way they normally would.
 *
 * The animated copy is aria-hidden; the real string stays in a visually-hidden
 * span so screen readers and copy-paste get clean text.
 *
 * Server component. Pure CSS keyframes on transform and opacity.
 */
export default function SplitText({
  text,
  /** Characters already animated before this line, so lines stagger in order. */
  offset = 0,
  gradient = false,
}: {
  text: string;
  offset?: number;
  gradient?: boolean;
}) {
  const words = text.split(" ");
  const totalLetters = text.replace(/ /g, "").length;

  let charIndex = 0; // position in the full string, for the stagger
  let letterIndex = 0; // position among non-space chars, for the ramp

  return (
    <>
      <span aria-hidden="true">
        {words.map((word, w) => {
          const node = (
            <span key={w} className="split-word">
              {Array.from(word).map((ch, i) => {
                const delay = 120 + (offset + charIndex) * 16;
                const color = gradient
                  ? rampColor(letterIndex, totalLetters)
                  : undefined;
                charIndex += 1;
                letterIndex += 1;
                return (
                  <span
                    key={i}
                    className="split-char"
                    style={{ animationDelay: `${delay}ms`, color }}
                  >
                    {ch}
                  </span>
                );
              })}
            </span>
          );
          charIndex += 1; // the space that followed this word
          return w < words.length - 1 ? [node, " "] : node;
        })}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}
