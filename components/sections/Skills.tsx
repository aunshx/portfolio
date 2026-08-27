import SectionHead from "@/components/layout/SectionHead";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal from "@/components/ui/Reveal";
import { SKILLS } from "@/content/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-14"
    >
      <SectionHead
        eyebrow="Stack"
        title="Tools I use"
        id="skills-title"
        lead="What I reach for day to day, grouped by where it sits."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((group, i) => (
          <Reveal key={group.group} delay={i * 60}>
            <SpotlightCard className="h-full rounded-2xl p-5">
              <div className="relative z-10">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {group.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item, j) => (
                    <li
                      key={item}
                      className="chip-in rounded-md border border-line bg-surface/50 px-2.5 py-1 text-[13px] text-text transition-colors hover:border-accent hover:text-accent"
                      style={{ animationDelay: `${i * 90 + j * 45}ms` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
