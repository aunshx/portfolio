"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Dir = "up" | "left" | "right" | "none";

/**
 * Content is always rendered visible. A block that starts below the fold
 * gets one short fade as it scrolls in (see `.reveal` in globals.css);
 * anything already on screen at load is left alone, so nothing dims after
 * hydration and nothing is ever hidden from find-in-page, print or a
 * full-page capture.
 */
export default function Reveal({
  children,
  delay = 0,
  from = "up",
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  from?: Dir;
  as?: "div" | "li" | "section" | "tr";
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-shown={shown}
      data-from={from}
      className={`reveal ${className}`}
      style={delay ? { animationDelay: `${Math.min(delay, 150)}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
