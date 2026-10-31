import { ArrowUpRight } from "lucide-react";
import Section from "@/components/layout/SectionHead";
import { RESEARCH } from "@/content/research";

export default function Research() {
  return (
    <Section id="research" title="Papers">
      <ul className="grid grid-cols-1">
        {RESEARCH.map((item, i) => (
          <li
            key={item.title}
            className={`grid min-w-0 gap-x-6 gap-y-1 py-5 sm:grid-cols-[minmax(0,1fr)_auto] ${
              i === 0 ? "pt-0" : "border-t border-line"
            }`}
          >
            <div className="min-w-0">
              <h3 className="t-h3 max-w-[60ch]">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hit hover:text-accent"
                >
                  {item.title}
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="ml-1 inline align-[-0.1em] text-faint"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </h3>
              <p className="t-body mt-1 max-w-[68ch]">{item.description}</p>
            </div>
            {item.achievements[0] && (
              <p className="t-meta text-faint sm:pt-0.5 sm:text-right">{item.achievements[0]}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
