"use client";

import { Fragment, useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useActiveSection } from "@/lib/useActiveSection";
import { PROFILE, LINKS } from "@/content/profile";
import { CaseStudyList, CaseStudyMenu } from "./CaseStudyMenu";

const NAV = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

const SPY_IDS = ["top", "work", "experience", "writing", "contact"];

/** Always visible. Solid, so it never fights the content it scrolls over. */
export default function Header() {
  const active = useActiveSection(SPY_IDS);
  const [open, setOpen] = useState(false);

  // Escape closes the phone menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <span aria-hidden="true" data-progress className="progress" />
      <div className="flex h-14 items-center justify-between gap-6 px-[3vw]">
        <a
          href="#top"
          className="inline-flex min-h-11 items-center text-[0.875rem] font-semibold text-text"
        >
          {PROFILE.name}
        </a>

        <div className="-mr-2 flex items-center gap-2">
          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item, i) => {
                const on = active === item.id;
                return (
                  <Fragment key={item.id}>
                    <li>
                      <a
                        href={`#${item.id}`}
                        aria-current={on ? "true" : undefined}
                        className={`inline-flex min-h-11 items-center px-3 text-[0.875rem] transition-colors hover:text-accent ${
                          on ? "font-medium text-text" : "text-muted"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                    {i === 0 && (
                      <li>
                        <CaseStudyMenu />
                      </li>
                    )}
                  </Fragment>
                );
              })}
              <li>
                <a
                  href={LINKS.resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 items-center gap-1 pl-3 text-[0.875rem] text-muted transition-colors hover:text-accent"
                >
                  Résumé
                  <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:text-accent md:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Sections" className="border-t border-line bg-bg md:hidden">
          <ul className="px-[3vw] py-2">
            {NAV.map((item, i) => (
              <Fragment key={item.id}>
                <li>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? "true" : undefined}
                    className="flex min-h-11 items-center text-base text-text hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
                {i === 0 && <CaseStudyList onPick={() => setOpen(false)} />}
              </Fragment>
            ))}
            <li>
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="flex min-h-11 items-center gap-1 text-base text-text hover:text-accent"
              >
                Résumé
                <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
