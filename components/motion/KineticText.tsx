"use client";

import { useEffect, useRef } from "react";

/**
 * Display lines that fill the full width, set in a variable font. Letters
 * near the pointer thin out and narrow (weight and width axes), so the
 * name breathes as the cursor passes over it.
 *
 * Each line is sized so it spans its container exactly at rest. Before
 * hydration a CSS fallback size (--fallback, in vw) is used, tuned to match.
 * Screen readers get the plain text through aria-label.
 */

const REST = { wght: 820, wdth: 125 };
const NEAR = { wght: 160, wdth: 62 };

export default function KineticText({
  id,
  lines,
  className = "",
  as: Tag = "span",
  fallback,
  delay = 0,
}: {
  id?: string;
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  /** Font size per line before the fit runs, in vw. */
  fallback: number[];
  /** Seconds before the letters inflate in. */
  delay?: number;
}) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const rows = Array.from(el.querySelectorAll<HTMLElement>("[data-row]"));
    const chars = Array.from(el.querySelectorAll<HTMLElement>("[data-char]"));

    // Fit each row to the container. Measured on a hidden copy at rest, so
    // the intro animation and the hover effect never skew the result. Runs
    // on resize and whenever a font finishes loading.
    const probes = rows.map((row) => {
      const p = row.cloneNode(true) as HTMLElement;
      p.removeAttribute("data-row");
      p.querySelectorAll("[data-char]").forEach((c) => {
        c.removeAttribute("data-char");
        (c as HTMLElement).style.animation = "none";
      });
      Object.assign(p.style, {
        position: "absolute",
        visibility: "hidden",
        pointerEvents: "none",
        left: "0",
        top: "0",
        fontSize: "100px",
      });
      el.appendChild(p);
      return p;
    });
    const fit = () => {
      const width = el.clientWidth;
      rows.forEach((row, i) => {
        const ratio = probes[i].scrollWidth / 100;
        if (ratio > 0) row.style.fontSize = `${width / ratio}px`;
      });
    };
    let alive = true;
    fit();
    document.fonts.ready.then(() => alive && fit());
    document.fonts.addEventListener("loadingdone", fit);
    const ro = new ResizeObserver(fit);
    ro.observe(el);

    const moving =
      matchMedia("(pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let px = -1e4, py = -1e4;
    const paint = () => {
      raf = 0;
      chars.forEach((c) => {
        const r = c.getBoundingClientRect();
        const reach = r.height * 1.1;
        const dx = (r.left + r.width / 2 - px) / reach;
        const dy = (r.top + r.height / 2 - py) / reach;
        const t = Math.exp(-(dx * dx + dy * dy));
        const wght = REST.wght + (NEAR.wght - REST.wght) * t;
        const wdth = REST.wdth + (NEAR.wdth - REST.wdth) * t;
        c.style.fontVariationSettings = `"wght" ${wght.toFixed(0)}, "wdth" ${wdth.toFixed(1)}`;
      });
    };
    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
    };
    const onLeave = () => {
      px = py = -1e4;
      if (!raf) raf = requestAnimationFrame(paint);
    };
    if (moving) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }

    return () => {
      alive = false;
      probes.forEach((p) => p.remove());
      ro.disconnect();
      document.fonts.removeEventListener("loadingdone", fit);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  let n = 0;
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={root as any}
      id={id}
      aria-label={lines.join(" ")}
      className={`kinetic ${className}`}
    >
      {lines.map((line, i) => (
        <span
          key={line}
          data-row
          aria-hidden="true"
          className="kinetic-row"
          style={{ fontSize: `${fallback[i] ?? fallback[0]}vw` }}
        >
          {Array.from(line).map((ch, j) => (
            <span
              key={j}
              data-char
              className="kinetic-char"
              style={{ ["--i" as string]: n++, ["--delay" as string]: `${delay}s` }}
            >
              {ch === " " ? " " : ch}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
