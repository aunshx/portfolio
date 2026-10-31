import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Screenshot from "@/components/ui/Screenshot";
import { WORK } from "@/content/work";
import { LINKS } from "@/content/profile";

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="link">
      {children}
      <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

/**
 * All four projects as one grid: four across on wide screens, two on
 * tablets, one on phones. Nothing overlaps the screenshots.
 */
export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="pb-8 sm:pb-10">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-t border-line pt-8 sm:pt-10">
          <h2 id="work-title" className="t-h2">
            Selected work
          </h2>
          <External href={LINKS.github}>More on GitHub</External>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-14 sm:mt-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-6">
          {WORK.map((item) => {
            const primary = item.caseStudy ? `/work/${item.caseStudy}` : item.link ?? item.gitUrl;
            const internal = Boolean(item.caseStudy);
            return (
              <li key={item.id} className="flex min-w-0 flex-col">
                {/* The screenshot repeats the title link for pointer users only. */}
                {internal ? (
                  <Link href={primary!} tabIndex={-1} aria-hidden="true" className="block">
                    <Screenshot
                      shot={item.shot}
                      label={item.title}
                      aspect="16 / 9"
                      sizes="(min-width: 1280px) 275px, (min-width: 768px) 45vw, 100vw"
                    />
                  </Link>
                ) : (
                  <a
                    href={primary}
                    target="_blank"
                    rel="noreferrer noopener"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="block"
                  >
                    <Screenshot
                      shot={item.shot}
                      label={item.title}
                      aspect="16 / 9"
                      sizes="(min-width: 1280px) 275px, (min-width: 768px) 45vw, 100vw"
                    />
                  </a>
                )}

                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="t-h3">
                    {internal ? (
                      <Link href={primary!} className="hit hover:text-accent">
                        {item.title}
                      </Link>
                    ) : (
                      <a
                        href={primary}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hit hover:text-accent"
                      >
                        {item.title}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    )}
                  </h3>
                  <span className="t-meta tabular shrink-0 text-faint">{item.year}</span>
                </div>

                <p className="t-body mt-2">{item.description}</p>

                <dl className="t-meta mt-4 grid gap-1.5">
                  <div>
                    <dt className="sr-only">Role</dt>
                    <dd>{item.role}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Result</dt>
                    <dd>
                      <span className="font-semibold text-text">{item.metric.value}</span>{" "}
                      {item.metric.label}
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Built with</dt>
                    <dd className="text-faint">{item.tech.join(", ")}</dd>
                  </div>
                </dl>

                <p className="mt-auto flex flex-wrap gap-x-4 pt-2">
                  {item.caseStudy && (
                    <Link href={`/work/${item.caseStudy}`} className="link">
                      Case study
                      <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                    </Link>
                  )}
                  {item.link && <External href={item.link}>Live site</External>}
                  {item.gitUrl && <External href={item.gitUrl}>Code</External>}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
