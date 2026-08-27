"use client";

import { useEffect, useState } from "react";

/**
 * Scroll-spy over real anchor targets.
 *
 * Recomputes from every section's rect on scroll rather than relying on an
 * IntersectionObserver: the work run is several viewports tall, and an
 * observer only reports the entries that changed, which leaves the active
 * state stale for the whole time that section fills the screen.
 *
 * The listener is passive and coalesced into one rAF per frame, so it only
 * does work while the page is actually moving.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => Boolean(e));
    if (!els.length) return;

    let frame = 0;

    function measure() {
      frame = 0;
      // Whichever section occupies this line is the one being read.
      const line = window.innerHeight * 0.35;

      let current = els[0].id;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) {
          current = el.id;
          break;
        }
        if (r.bottom <= line) current = el.id;
      }

      // The foot of the page always resolves to the last section, so a short
      // final section is still reachable.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = els[els.length - 1].id;
      }

      setActive((prev) => (prev === current ? prev : current));
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}
