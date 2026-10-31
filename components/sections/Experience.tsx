import { ArrowUpRight } from "lucide-react";
import Section from "@/components/layout/SectionHead";
import ShowMore from "@/components/ui/ShowMore";
import { EXPERIENCE } from "@/content/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ShowMore
        as="ol"
        initial={3}
        labelMore={`Show ${EXPERIENCE.length - 3} earlier roles`}
        className="grid"
      >
        {EXPERIENCE.map((role, i) => (
          <li
            key={role.name}
            className={`grid gap-2 py-7 sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:gap-8 ${
              i === 0 ? "pt-0" : "border-t border-line"
            }`}
          >
            <p className="t-meta tabular pt-0.5">{role.duration}</p>

            <div className="min-w-0">
              <h3 className="t-h3">
                {role.position}
                <span className="font-normal text-muted">, </span>
                {role.link ? (
                  <a
                    href={role.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hit prose-link font-normal text-muted"
                  >
                    {role.name}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="ml-0.5 inline align-[-0.1em]"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <span className="font-normal text-muted">{role.name}</span>
                )}
              </h3>

              <ul className="mt-3 grid max-w-[68ch] gap-2">
                {role.work.map((line) => (
                  <li
                    key={line}
                    className="t-body relative pl-4 before:absolute before:left-0 before:top-[0.72em] before:size-1 before:rounded-full before:bg-faint"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ShowMore>
    </Section>
  );
}
