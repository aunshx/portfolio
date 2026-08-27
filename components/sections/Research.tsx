import { ArrowUpRight } from "lucide-react";
import SectionHead from "@/components/layout/SectionHead";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal from "@/components/ui/Reveal";
import { RESEARCH } from "@/content/research";

export default function Research() {
  return (
    <section
      id="research"
      aria-labelledby="research-title"
      className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-14"
    >
      <SectionHead
        eyebrow="Research"
        title="Papers"
        id="research-title"
        lead="Projects that ended up written up and reviewed."
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        {RESEARCH.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 2) * 90} from={i % 2 ? "right" : "left"}>
            <SpotlightCard as="article" className="group h-full rounded-2xl">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                className="relative z-10 flex h-full flex-col p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.achievements.map((a) => (
                      <span
                        key={a}
                        className="rounded-full bg-accent-quiet px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-accent"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.9}
                    aria-hidden="true"
                    className="shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>

                <h3 className="mt-3 text-[17px] font-semibold leading-snug tracking-[-0.01em] text-text transition-colors group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-2.5 grow text-[14px] leading-relaxed text-muted">
                  {item.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-line px-2 py-0.5 font-mono text-[10.5px] text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
