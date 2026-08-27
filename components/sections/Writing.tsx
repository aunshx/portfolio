import { ArrowUpRight, Eye, Heart } from "lucide-react";
import SectionHead from "@/components/layout/SectionHead";
import Reveal from "@/components/ui/Reveal";
import ShowMore from "@/components/ui/ShowMore";
import { WRITING, TOTAL_VIEWS } from "@/content/writing";

const fmt = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 1 : 1)}K` : String(n);

export default function Writing() {
  return (
    <section
      id="writing"
      aria-labelledby="writing-title"
      className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-14"
    >
      <SectionHead
        eyebrow="Writing"
        title="Tutorials and write-ups"
        id="writing-title"
        lead={`${Math.round(TOTAL_VIEWS / 1000)}K reads across Medium and JavaScript in Plain English.`}
      />

      <ShowMore
        initial={4}
        labelMore={`Show all ${WRITING.length} articles`}
        className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line"
      >
        {WRITING.map((article, i) => (
          <Reveal as="li" key={article.link} delay={Math.min(i, 4) * 35}>
            <a
              href={article.link}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center gap-5 bg-bg px-5 py-4 transition-all duration-300 hover:bg-surface-raised hover:pl-7 sm:px-6 sm:hover:pl-8"
            >
              <div className="min-w-0 grow">
                <h3 className="truncate text-[15px] font-medium text-text transition-colors group-hover:text-accent">
                  {article.title}
                </h3>
                <p className="mt-0.5 truncate text-[13px] text-muted">
                  {article.description}
                </p>
              </div>

              <div className="hidden shrink-0 items-center gap-4 sm:flex">
                <span className="tabular flex items-center gap-1.5 font-mono text-[12px] text-muted">
                  <Eye size={13} strokeWidth={1.8} aria-hidden="true" />
                  {fmt(article.views)}
                  <span className="sr-only">reads</span>
                </span>
                <span className="tabular flex items-center gap-1.5 font-mono text-[12px] text-faint">
                  <Heart size={12} strokeWidth={1.8} aria-hidden="true" />
                  {article.upvotes}
                  <span className="sr-only">claps</span>
                </span>
              </div>

              <ArrowUpRight
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
                className="shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        ))}
      </ShowMore>
    </section>
  );
}
