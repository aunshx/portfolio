import { ArrowDown, ArrowUpRight } from "lucide-react";
import TerrainField, { type TerrainPin } from "@/components/motion/TerrainField";
import Contours from "@/components/motion/Contours";
import Readout from "@/components/motion/Readout";
import Clock from "@/components/ui/Clock";
import { PROFILE, LINKS } from "@/content/profile";
import { WORK } from "@/content/work";

/** Where each project stands on the land. */
const PLACES: Record<string, { x: number; z: number }> = {
  FRED: { x: 0.35, z: -1.4 },
  reaktr: { x: 2.4, z: -3.0 },
  FRREDSS: { x: -1.7, z: -4.3 },
  ResView: { x: 1.05, z: -6.3 },
};

const PINS: TerrainPin[] = WORK.map((w) => ({
  title: w.title,
  year: w.year,
  desc: w.description,
  href: w.caseStudy ? `/work/${w.caseStudy}` : w.link!,
  external: !w.caseStudy,
  thumb: `${w.shot.base}-${w.shot.widths[0]}.webp`,
  ...PLACES[w.title],
}));

const LINK_ROW = [
  { href: LINKS.github, label: "GitHub" },
  { href: LINKS.linkedin, label: "LinkedIn" },
  { href: LINKS.medium, label: "Medium" },
  { href: LINKS.resume, label: "Résumé", pdf: true },
];

/* Legend symbols, drawn rather than typed. */
const Sym = {
  pin: (
    <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="4.5" fill="var(--accent)" /><circle cx="10" cy="10" r="8" fill="none" stroke="var(--accent)" strokeWidth="1.2" /></svg>
  ),
  contour: (
    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M1 13c3-6 6 2 9-3s6-1 9-4" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M1 17c3-5 6 1 9-2s6 0 9-3" fill="none" stroke="currentColor" strokeWidth="0.8" opacity=".6" /></svg>
  ),
  peak: (
    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 16 10 4l7 12Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>
  ),
  status: (
    <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="4" fill="#10b981" /></svg>
  ),
  where: (
    <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M10 1v5M10 14v5M1 10h5M14 10h5" stroke="currentColor" strokeWidth="1.3" /></svg>
  ),
};

/**
 * The hero is a map of the work: a 3D landscape with each project standing
 * on it as a pin, and a cartographic legend that holds the name, what he
 * does, where he is and how to reach him.
 */
export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="hero">
      <Contours />
      <TerrainField pins={PINS} />

      {/* Map furniture: north arrow and a scale bar. */}
      <div className="map-furniture intro-fade" aria-hidden="true" style={{ ["--d" as string]: "0.4s" }}>
        <svg viewBox="0 0 40 56" className="north">
          <path d="M20 4 30 40 20 33 10 40Z" fill="var(--text)" />
          <path d="M20 4 20 33 10 40Z" fill="var(--bg)" stroke="var(--text)" strokeWidth="1.2" strokeLinejoin="round" />
          <text x="20" y="54" textAnchor="middle">N</text>
        </svg>
        <div className="scalebar">
          <span className="scalebar-bar" />
          <span className="scalebar-label">0 &nbsp; 1 side project</span>
        </div>
      </div>

      <div className="hero-inner">
        <div className="legend intro-fade" style={{ ["--d" as string]: "0.2s" }}>
          <h1 id="hero-title" className="legend-name">
            {PROFILE.name}
          </h1>
          <p className="legend-what">
            Full-stack engineer. I build products end to end, from the interface down to the database, AI included. It mostly behaves.
          </p>

          <dl className="legend-key">
            <div>
              <dt>{Sym.pin}Projects</dt>
              <dd>Hover a pin</dd>
            </div>
            <div>
              <dt>{Sym.contour}Contours</dt>
              <dd>Each line is 10 m of scope creep</dd>
            </div>
            <div>
              <dt>{Sym.peak}Peaks</dt>
              <dd>Things that shipped</dd>
            </div>
            <div>
              <dt>{Sym.status}Status</dt>
              <dd>{PROFILE.availability}</dd>
            </div>
            <div>
              <dt>{Sym.where}Location</dt>
              <dd>
                {PROFILE.location}, <Clock />
              </dd>
            </div>
          </dl>

          <ul className="legend-links">
            {LINK_ROW.map(({ href, label, pdf }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer noopener" className="link">
                  {label}
                  <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                  <span className="sr-only">{pdf ? "(PDF, opens in a new tab)" : "(opens in a new tab)"}</span>
                </a>
              </li>
            ))}
            <li>
              <a href={LINKS.email} className="link">
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-corner intro-fade" style={{ ["--d" as string]: "0.5s" }}>
          <Readout />
          <a href="#work" className="btn btn-primary" data-magnetic>
            See the work
            <ArrowDown size={15} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
