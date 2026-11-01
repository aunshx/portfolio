"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { CASE_STUDY_INDEX } from "@/content/case-study-index";

/**
 * "Case studies" in the header: a disclosure button that opens a short list
 * of every study. Closes on Escape (focus returns to the button), on a click
 * outside, and when a link is chosen.
 */
export function CaseStudyMenu({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const wrap = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      button.current?.focus();
    };
    const onDown = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <div ref={wrap} className="relative">
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex min-h-11 items-center gap-1 px-3 text-[0.875rem] transition-colors hover:text-accent ${
          current ? "font-medium text-text" : "text-muted"
        }`}
      >
        Case studies
        <ChevronDown
          size={14}
          strokeWidth={2}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div id={id} hidden={!open} className="cs-menu">
        <ul>
          {CASE_STUDY_INDEX.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/work/${c.slug}`}
                aria-current={current === c.slug ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="cs-menu-link"
              >
                <span className="cs-menu-name">{c.name}</span>
                <span className="cs-menu-blurb">{c.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/#work" onClick={() => setOpen(false)} className="cs-menu-all">
          All work
        </Link>
      </div>
    </div>
  );
}

/** The same list for phone menus: a labelled group of plain links. */
export function CaseStudyList({ current, onPick }: { current?: string; onPick?: () => void }) {
  return (
    <li>
      <p className="pt-3 pb-1 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-faint">Case studies</p>
      <ul className="border-l border-line pl-3">
        {CASE_STUDY_INDEX.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/work/${c.slug}`}
              onClick={onPick}
              aria-current={current === c.slug ? "page" : undefined}
              className="flex min-h-11 items-baseline gap-2 text-base text-text hover:text-accent aria-[current=page]:text-accent"
            >
              {c.name}
              <span className="text-[0.8125rem] text-faint">{c.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
