import { ArrowUpRight } from "lucide-react";
import Section from "@/components/layout/SectionHead";
import { WRITING, TOTAL_VIEWS } from "@/content/writing";
import { LINKS } from "@/content/profile";

const reads = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, "")}K` : String(n);

const SHOWN = 3;

export default function Writing() {
  return (
    <Section
      id="writing"
      title="Writing"
      note={`${Math.round(TOTAL_VIEWS / 1000)}K reads on Medium`}
    >
      <ul className="grid">
        {WRITING.slice(0, SHOWN).map((article, i) => (
          <li key={article.link} className={`min-w-0 ${i === 0 ? "" : "border-t border-line"}`}>
            <a
              href={article.link}
              target="_blank"
              rel="noreferrer noopener"
              className={`group flex items-baseline justify-between gap-6 py-4 ${i === 0 ? "pt-0" : ""}`}
            >
              <span className="t-h3 min-w-0 transition-colors group-hover:text-accent">
                {article.title}
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
              <span className="t-meta tabular shrink-0 text-faint">{reads(article.views)} reads</span>
            </a>
          </li>
        ))}
      </ul>
      <a href={LINKS.medium} target="_blank" rel="noreferrer noopener" className="link mt-2">
        All {WRITING.length} articles on Medium
        <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </Section>
  );
}
