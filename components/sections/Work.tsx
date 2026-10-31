import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Screenshot from "@/components/ui/Screenshot";
import { WORK } from "@/content/work";
import { LINKS } from "@/content/profile";
import type { WorkItem } from "@/content/types";

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="link">
      {children}
      <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

/** Screenshot link: the case study when there is one, else the live site. */
function ShotLink({ item, sizes }: { item: WorkItem; sizes: string }) {
  const shot = <Screenshot shot={item.shot} label={item.title} aspect="16 / 9" sizes={sizes} />;
  // Pointer-only duplicate of the title link, so it stays out of the tab order.
  return item.caseStudy ? (
    <Link
      href={`/work/${item.caseStudy}`}
      tabIndex={-1}
      aria-hidden="true"
      className="shot-link block"
      data-reveal
      data-cursor="Case study"
    >
      {shot}
    </Link>
  ) : (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer noopener"
      tabIndex={-1}
      aria-hidden="true"
      className="shot-link block"
      data-reveal
      data-cursor="Visit"
    >
      {shot}
    </a>
  );
}

function Caption({ item }: { item: WorkItem }) {
  return (
    <div className="min-w-0" data-stagger>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="t-h3">
          {item.caseStudy ? (
            <Link href={`/work/${item.caseStudy}`} className="hit hover:text-accent">
              {item.title}
            </Link>
          ) : (
            <a href={item.link} target="_blank" rel="noreferrer noopener" className="hit hover:text-accent">
              {item.title}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </h3>
        <span className="t-meta tabular shrink-0 text-faint">{item.year}</span>
      </div>
      <p className="t-body mt-1">{item.description}</p>
      <p className="t-meta mt-3">
        <span className="font-semibold text-accent" data-count>
          {item.metric.value}
        </span> {item.metric.label}
      </p>
      <p className="mt-1 flex flex-wrap gap-x-5">
        {item.caseStudy && (
          <Link href={`/work/${item.caseStudy}`} className="link">
            Case study
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        )}
        {item.link && <External href={item.link}>Live site</External>}
        {item.gitUrl && <External href={item.gitUrl}>Code</External>}
      </p>
    </div>
  );
}

/**
 * The newest project large, the rest two across. FRED leads the hero, so it
 * isn't repeated here.
 */
export default function Work() {
  const [lead, ...rest] = WORK;
  return (
    <section id="work" aria-labelledby="work-title" className="pb-10 sm:pb-14">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <span data-rule className="rule" />
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 pt-8 sm:pt-10">
          <h2 id="work-title" className="t-h2" data-split>
            More work
          </h2>
          <External href={LINKS.github}>The half-finished ones live on GitHub</External>
        </div>

        <ul className="mt-8 grid gap-x-10 gap-y-14 sm:mt-10 md:grid-cols-2">
          <li className="grid min-w-0 items-center gap-6 md:col-span-2 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-12">
            <ShotLink item={lead} sizes="(min-width: 1180px) 690px, (min-width: 1024px) 60vw, 100vw" />
            <Caption item={lead} />
          </li>
          {rest.map((item) => (
            <li key={item.id} className="grid min-w-0 content-start gap-5">
              <ShotLink item={item} sizes="(min-width: 1180px) 540px, (min-width: 768px) 46vw, 100vw" />
              <Caption item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
