import { ArrowUpRight } from "lucide-react";
import Section from "@/components/layout/SectionHead";
import { EXPERIENCE } from "@/content/experience";
import { LINKS } from "@/content/profile";

/** One row per role. The detail lives in the résumé. */
export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      note={
        <a href={LINKS.resume} target="_blank" rel="noreferrer noopener" className="link">
          Full résumé
          <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          <span className="sr-only">(PDF, opens in a new tab)</span>
        </a>
      }
    >
      <ol className="grid">
        {EXPERIENCE.map((role, i) => (
          <li
            key={role.name}
            className={`grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8 ${
              i === 0 ? "pt-0" : "border-t border-line"
            }`}
          >
            <p className="t-meta tabular text-faint sm:pt-0.5">{role.duration}</p>
            <div className="min-w-0">
              <h3 className="t-h3">
                {role.position}
                <span className="font-normal text-muted"> · </span>
                <span className="font-normal text-muted">{role.name}</span>
              </h3>
              <p className="t-meta mt-0.5">{role.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
