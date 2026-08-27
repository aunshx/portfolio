import Image from "next/image";
import SectionHead from "@/components/layout/SectionHead";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal from "@/components/ui/Reveal";
import { EDUCATION } from "@/content/education";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-14"
    >
      <SectionHead eyebrow="Education" title="Education" id="education-title" />

      <ul className="grid gap-4 sm:grid-cols-2">
        {EDUCATION.map((school, i) => (
          <Reveal as="li" key={school.title} delay={i * 90} from={i % 2 ? "right" : "left"}>
            <SpotlightCard as="article" className="h-full rounded-2xl p-6">
              <div className="relative z-10 flex items-start gap-4">
                <Image
                  src={school.logo}
                  alt=""
                  width={48}
                  height={48}
                  className="mt-0.5 size-10 shrink-0 object-contain"
                />
                <div className="min-w-0">
                  <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-text">
                    {school.title}
                  </h3>
                  <p className="mt-1 text-[14px] text-muted">{school.degree}</p>
                  {school.duration && (
                    <p className="tabular mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                      {school.duration}
                    </p>
                  )}
                  {school.extra && (
                    <p className="mt-2 text-[13px] text-muted">{school.extra}</p>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
