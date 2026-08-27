import { ArrowUpRight, Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { PROFILE, LINKS, COLOPHON } from "@/content/profile";

const SOCIAL = [
  { href: LINKS.github, label: "GitHub", Icon: Github },
  { href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: LINKS.medium, label: "Medium", Icon: BookOpen },
  { href: LINKS.email, label: "Email", Icon: Mail },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 overflow-hidden border-t border-line">

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
        <p
          aria-hidden="true"
          className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
        >
          Contact
        </p>

        <h2
          id="contact-title"
          className="max-w-[18ch] text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.03em] text-text sm:text-[3.4rem]"
        >
          Looking for my <span className="grad">next role</span>.
        </h2>

        <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-muted">
          I&rsquo;m open to full-stack engineering roles. Email is the
          fastest way to reach me.
        </p>

        <a
          href={LINKS.email}
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
        >
          Contact me
          <ArrowUpRight
            size={15}
            strokeWidth={2.2}
            aria-hidden="true"
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

        <ul className="mt-8 flex flex-wrap items-center gap-2">
          {SOCIAL.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer noopener"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-7 font-mono text-[11px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>{COLOPHON.forged}</span>
            <span aria-hidden="true">·</span>
            <span>{COLOPHON.note.text} 🤖</span>
          </p>
          <p className="tabular flex items-center gap-3">
            <span>{PROFILE.coordinates}</span>
            <span aria-hidden="true">·</span>
            <span>{COLOPHON.version}</span>
            <span aria-hidden="true">·</span>
            <span>{COLOPHON.year}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
