import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE } from "@/content/experience";
import { WRITING, TOTAL_VIEWS } from "@/content/writing";
import { RESEARCH } from "@/content/research";
import { EDUCATION } from "@/content/education";
import { SKILLS } from "@/content/skills";
import { LINKS } from "@/content/profile";

const reads = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, "")}K` : String(n);

function Out({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/**
 * Everything a recruiter checks after the work, in three tight columns:
 * experience, writing and papers, education and tools.
 */
export default function FinePrint() {
  return (
    <section aria-labelledby="fine-title" className="fine">
      <div className="fine-head">
        <h2 id="fine-title" className="display-h2" data-split>
          The fine print
        </h2>
        <p className="fine-note">For the people who read footnotes. We should talk.</p>
      </div>

      <div className="fine-grid">
        <div id="experience" className="fine-col">
          <div className="fine-col-head">
            <h3>Experience</h3>
            <Out href={LINKS.resume} className="link">
              Résumé (PDF, sorry)
              <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
            </Out>
          </div>
          <ol data-stagger>
            {EXPERIENCE.map((r) => (
              <li key={r.name} className="fine-row">
                <span className="fine-main">{r.position}</span>
                <span className="fine-sub">{r.name}</span>
                <span className="fine-meta tabular">{r.duration}</span>
              </li>
            ))}
          </ol>
        </div>

        <div id="writing" className="fine-col">
          <div className="fine-col-head">
            <h3>Writing</h3>
            <span className="fine-meta">{Math.round(TOTAL_VIEWS / 1000)}K reads, mostly WhatsApp</span>
          </div>
          <ul data-stagger>
            {WRITING.slice(0, 3).map((a) => (
              <li key={a.link}>
                <Out href={a.link} className="fine-row row-link">
                  <span className="fine-main">{a.title}</span>
                  <span className="fine-meta tabular">{reads(a.views)} reads</span>
                </Out>
              </li>
            ))}
          </ul>
          <Out href={LINKS.medium} className="link">
            All {WRITING.length} on Medium
            <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          </Out>

          <div className="fine-col-head mt-10">
            <h3>Papers</h3>
            <span className="fine-meta">One is about antennas. It won.</span>
          </div>
          <ul data-stagger>
            {RESEARCH.map((p) => (
              <li key={p.title}>
                <Out href={p.link!} className="fine-row row-link">
                  <span className="fine-main">{p.title}</span>
                  {p.note && <span className="fine-meta">{p.note}</span>}
                </Out>
              </li>
            ))}
          </ul>
        </div>

        <div className="fine-col">
          <div className="fine-col-head">
            <h3>Education</h3>
            <span className="fine-meta">Where I learned to read error messages</span>
          </div>
          <ul data-stagger>
            {EDUCATION.map((e) => (
              <li key={e.title} className="fine-row">
                <span className="fine-main">{e.degree}</span>
                <span className="fine-sub">{e.title}</span>
                <span className="fine-meta tabular">{e.duration}</span>
              </li>
            ))}
          </ul>

          <div className="fine-col-head mt-10">
            <h3>Tools</h3>
            <span className="fine-meta">Things I’ve broken, then fixed</span>
          </div>
          <dl data-stagger>
            {SKILLS.map((g) => (
              <div key={g.group} className="fine-row">
                <dt className="fine-main">{g.group}</dt>
                <dd className="fine-sub">{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
