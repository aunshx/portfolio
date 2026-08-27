import { PROFILE } from "@/content/profile";

const ITEMS = [
  "Full-stack engineer",
  "React · Next.js · TypeScript",
  "Node · FastAPI · PostgreSQL",
  "Open to full-stack roles",
  "Docker · CI/CD · AWS",
  "Shipping since 2020",
];

/**
 * Keyword strip pinned to the very top edge, above the nav. First thing a
 * visitor reads. CSS-only marquee, duplicated once so the loop is seamless.
 */
export default function Ticker() {
  return (
    <div className="ticker" aria-label={`${PROFILE.name}, ${PROFILE.role}`}>
      <div className="marquee">
        <div>
          {[...ITEMS, ...ITEMS].map((t, i) => (
            <span key={`${t}-${i}`} aria-hidden={i >= ITEMS.length}>
              {t}
              <i aria-hidden="true">✦</i>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
