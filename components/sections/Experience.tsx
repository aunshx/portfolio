import { ArrowUpRight } from "lucide-react";
import SectionHead from "@/components/layout/SectionHead";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal from "@/components/ui/Reveal";
import ShowMore from "@/components/ui/ShowMore";
import { EXPERIENCE } from "@/content/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-14"
    >
      <SectionHead
        eyebrow="Experience"
        title="Roles"
        id="experience-title"
      />

      <ShowMore
        as="ol"
        initial={3}
        labelMore={`Show all ${EXPERIENCE.length} roles`}
        className="grid gap-4"
      >
        {EXPERIENCE.map((role, i) => (
          <Reveal as="li" key={role.name} delay={i * 70} from="left">
            <SpotlightCard as="article" className="rounded-2xl p-6 sm:p-7">
              <div className="relative z-10 grid gap-4 sm:grid-cols-[13rem_1fr] sm:gap-8">
                <div>
                  <p className="tabular font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                    {role.duration}
                  </p>
                  <p className="mt-2 text-[15px] font-medium text-text">
                    {role.link ? (
                      <a
                        href={role.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                      >
                        {role.name}
                        <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      role.name
                    )}
                  </p>
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold tracking-[-0.015em] text-text">
                    {role.position}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {role.work.map((line, j) => (
                      <li
                        key={line}
                        className="chip-in relative pl-4 text-[14px] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.68em] before:size-1.5 before:rounded-full before:bg-accent/45"
                        style={{ animationDelay: `${i * 70 + j * 80}ms` }}
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                  {role.tech && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {role.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-line px-2 py-0.5 font-mono text-[10.5px] text-muted"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </ShowMore>
    </section>
  );
}
