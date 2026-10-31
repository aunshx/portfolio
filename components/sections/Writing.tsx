import { ArrowUpRight } from "lucide-react";
import Section from "@/components/layout/SectionHead";
import ShowMore from "@/components/ui/ShowMore";
import { WRITING, TOTAL_VIEWS } from "@/content/writing";

const reads = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, "")}K` : String(n);

export default function Writing() {
  return (
    <Section
      id="writing"
      title="Writing"
      note={`Tutorials read ${Math.round(TOTAL_VIEWS / 1000)}K times on Medium and JavaScript in Plain English.`}
    >
      <ShowMore
        initial={3}
        labelMore={`Show all ${WRITING.length} articles`}
        className="grid grid-cols-1"
      >
        {WRITING.map((article, i) => (
          <li key={article.link} className={`min-w-0 ${i === 0 ? "" : "border-t border-line"}`}>
            <a
              href={article.link}
              target="_blank"
              rel="noreferrer noopener"
              className={`group grid gap-x-6 gap-y-1 py-5 sm:grid-cols-[minmax(0,1fr)_auto] ${
                i === 0 ? "pt-0" : ""
              }`}
            >
              <span className="min-w-0">
                <span className="t-h3 block transition-colors group-hover:text-accent">
                  {article.title}
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="ml-1 inline align-[-0.1em] text-faint group-hover:text-accent"
                  />
                </span>
                <span className="t-body mt-1 block">{article.description}</span>
              </span>
              <span className="t-meta tabular text-faint sm:pt-0.5">
                {reads(article.views)} reads
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ShowMore>
    </Section>
  );
}
