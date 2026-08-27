"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "@/lib/useActiveSection";
import { PROFILE, LINKS } from "@/content/profile";

const NAV = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Stack" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

// "top" is not a nav item, but the backdrop needs the hero as its own
// section so the page does not open on the work wash.
const SPY_IDS = ["top", ...NAV.map((n) => n.id)];

export default function Header() {
  const active = useActiveSection(SPY_IDS);

  useEffect(() => {
    document.documentElement.dataset.section = active;
  }, [active]);
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#top"
          className="font-mono text-[13px] font-medium tracking-tight text-text"
        >
          {PROFILE.shortName}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`font-mono text-[11px] uppercase tracking-[0.14em] transition-colors hover:text-accent ${
                    active === item.id ? "text-accent" : "text-muted"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:border-accent hover:text-accent sm:inline-block"
          >
            Résumé
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:text-accent md:hidden"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="border-t border-line bg-bg md:hidden"
        >
          <ul className="mx-auto max-w-[1180px] px-5 py-3 sm:px-8">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-muted hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="block py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-muted hover:text-accent"
              >
                Résumé
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
