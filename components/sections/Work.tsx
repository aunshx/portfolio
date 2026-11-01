import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Screenshot from "@/components/ui/Screenshot";
import { WORK } from "@/content/work";
import { LINKS } from "@/content/profile";
import type { WorkItem } from "@/content/types";

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="card-link">
      {children}
      <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

function Card({ item }: { item: WorkItem }) {
  const href = item.caseStudy ? `/work/${item.caseStudy}` : item.link!;
  const internal = Boolean(item.caseStudy);
  const shot = (
    <Screenshot
      shot={item.shot}
      label={item.title}
      aspect="16 / 10"
      sizes="(min-width: 1024px) 720px, 100vw"
    />
  );
  return (
    <article
      className="card"
      data-card
      style={{
        ["--card-bg" as string]: item.tone.bg,
        ["--card-fg" as string]: item.tone.fg,
        ["--card-muted" as string]: item.tone.muted,
        ["--card-accent" as string]: item.tone.accent,
      }}
    >
      <span aria-hidden="true" className="card-dim" />
      <div className="card-text">
        <p className="card-year tabular">{item.year}</p>
        <h3 className="card-title">
          {internal ? (
            <Link href={href}>{item.title}</Link>
          ) : (
            <a href={href} target="_blank" rel="noreferrer noopener">
              {item.title}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </h3>
        <p className="card-desc">{item.description}</p>
        <p className="card-metric">
          <span className="card-metric-value" data-count>
            {item.metric.value}
          </span>{" "}
          {item.metric.label}
        </p>
        <p className="card-links">
          {internal && (
            <Link href={href} className="card-link">
              Case study
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </Link>
          )}
          {item.link && <External href={item.link}>Live site</External>}
          {item.gitUrl && <External href={item.gitUrl}>Code</External>}
        </p>
      </div>

      {/* Pointer-only duplicate of the title link, so it stays out of the tab order. */}
      {internal ? (
        <Link href={href} tabIndex={-1} aria-hidden="true" className="card-shot" data-cursor="Case study">
          {shot}
        </Link>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          tabIndex={-1}
          aria-hidden="true"
          className="card-shot"
          data-cursor="Visit"
        >
          {shot}
        </a>
      )}
    </article>
  );
}

/**
 * Four big cards in each project's own colors. On wider screens they stick
 * and stack as you scroll, each one settling back under the next.
 */
export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="work">
      <div className="work-head">
        <h2 id="work-title" className="display-h2" data-split>
          Selected work
        </h2>
        <a href={LINKS.github} target="_blank" rel="noreferrer noopener" className="link">
          The half-finished ones live on GitHub
          <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>

      <ol className="stack">
        {WORK.map((item, i) => (
          <li key={item.id} className="stack-item" style={{ ["--i" as string]: i }}>
            <Card item={item} />
          </li>
        ))}
      </ol>
    </section>
  );
}
