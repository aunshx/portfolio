import { ArrowUpRight } from "lucide-react";
import { PROFILE, LINKS, COLOPHON } from "@/content/profile";

const ELSEWHERE = [
  { href: LINKS.github, label: "GitHub" },
  { href: LINKS.linkedin, label: "LinkedIn" },
  { href: LINKS.medium, label: "Medium" },
  { href: LINKS.resume, label: "Résumé" },
];

export default function Footer() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="pb-10 pt-8 sm:pt-10">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-6 border-t border-line pt-8 sm:pt-10 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-12">
          <h2 id="contact-title" className="t-h2">
            Contact
          </h2>

          <div className="min-w-0">
            <p className="t-lead max-w-[40ch]">
              Looking for a full-stack or applied AI role. Email me. I reply faster than my builds finish.
            </p>

            <a
              href={LINKS.email}
              className="mt-5 inline-flex min-h-11 items-center break-all text-[1.25rem] font-semibold tracking-[-0.01em] text-text underline decoration-line-strong decoration-1 underline-offset-[0.3em] transition-colors hover:text-accent hover:decoration-current sm:text-[1.75rem] sm:tracking-[-0.02em]"
            >
              {PROFILE.email}
            </a>

            <ul className="mt-4 flex flex-wrap gap-x-6">
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
          </div>
        </div>

        <div className="t-meta mt-16 flex flex-col gap-1 border-t border-line pt-6 text-faint sm:flex-row sm:justify-between">
          <p>
            {COLOPHON.credit}
          </p>
          <p className="tabular">© {COLOPHON.year}</p>
        </div>
      </div>
    </footer>
  );
}
