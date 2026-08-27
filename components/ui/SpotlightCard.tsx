"use client";

import { useRef, type ReactNode } from "react";

/**
 * Pointer-tracking spotlight. Writes two CSS custom properties on move and
 * lets CSS do the painting. No requestAnimationFrame, no state, no re-render.
 * The listener is passive and scoped to the card, not the window.
 */
export default function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);

  function onPointerMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      onPointerMove={onPointerMove}
      className={`card ${className}`}
    >
      {children}
    </Tag>
  );
}
