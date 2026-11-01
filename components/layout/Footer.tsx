import { ArrowUpRight } from "lucide-react";
import KineticText from "@/components/motion/KineticText";
import Clock from "@/components/ui/Clock";
import { PROFILE, LINKS, COLOPHON } from "@/content/profile";

const ELSEWHERE = [
  { href: LINKS.github, label: "GitHub" },
  { href: LINKS.linkedin, label: "LinkedIn" },
  { href: LINKS.medium, label: "Medium" },
  { href: LINKS.resume, label: "Résumé" },
];

export default function Footer() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="foot">
      <p className="foot-lead" data-split>
        Looking for a full-stack or applied AI role.{" "}
        <span className="text-muted">I reply faster than my builds finish.</span>
      </p>

      <a href={LINKS.email} className="foot-big" data-cursor="Say hi">
        <KineticText as="span" id="contact-title" lines={["LET’S TALK"]} fallback={[12.76]} />
      </a>

      <div className="foot-grid">
        <a href={LINKS.email} className="foot-email" data-magnetic>
          {PROFILE.email}
        </a>
        <ul className="foot-links">
          {ELSEWHERE.map(({ href, label }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer noopener" className="link">
                {label}
                <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                <span className="sr-only">
                  {label === "Résumé" ? "(PDF, opens in a new tab)" : "(opens in a new tab)"}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="foot-meta">
          Bay Area, <Clock />
          <br />
          {COLOPHON.credit}
          <br />© {COLOPHON.year}
        </p>
      </div>
    </footer>
  );
}
