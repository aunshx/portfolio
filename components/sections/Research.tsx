import Section from "@/components/layout/SectionHead";
import { RESEARCH } from "@/content/research";

export default function Research() {
  return (
    <Section id="research" title="Papers">
      <ul className="grid">
        {RESEARCH.map((item, i) => (
          <li key={item.title} className={`min-w-0 ${i === 0 ? "" : "border-t border-line"}`}>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer noopener"
              className={`group block py-4 ${i === 0 ? "pt-0" : ""}`}
            >
              <span className="t-h3 block max-w-[62ch] transition-colors group-hover:text-accent">
                {item.title}
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
              {item.note && <span className="t-meta mt-0.5 block text-faint">{item.note}</span>}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
