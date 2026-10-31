import Section from "@/components/layout/SectionHead";
import { SKILLS } from "@/content/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Tools">
      <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {SKILLS.map((group) => (
          <div key={group.group}>
            <dt className="t-meta font-medium text-text">{group.group}</dt>
            <dd className="t-body mt-1">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
