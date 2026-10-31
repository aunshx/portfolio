import Image from "next/image";
import Section from "@/components/layout/SectionHead";
import { EDUCATION } from "@/content/education";

export default function Education() {
  return (
    <Section id="education" title="Education" note="Where I learned to read error messages.">
      <ul className="grid gap-6 sm:grid-cols-2 sm:gap-8" data-stagger>
        {EDUCATION.map((school) => (
          <li key={school.title} className="flex items-start gap-4">
            <Image
              src={school.logo}
              alt=""
              width={48}
              height={48}
              className="mt-0.5 size-10 shrink-0 object-contain"
            />
            <div className="min-w-0">
              <h3 className="t-h3">{school.title}</h3>
              <p className="t-meta mt-0.5">{school.degree}</p>
              {school.duration && (
                <p className="t-meta tabular mt-1 text-faint">{school.duration}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
