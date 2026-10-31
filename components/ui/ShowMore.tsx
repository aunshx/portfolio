"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Renders the first `initial` children and reveals the rest on request.
 * The hidden items stay in the DOM but out of the accessibility tree until
 * shown, so screen readers and keyboard order match what is visible.
 */
export default function ShowMore({
  children,
  initial,
  labelMore,
  labelLess = "Show less",
  className = "",
  as: Tag = "ul",
}: {
  children: ReactNode[];
  initial: number;
  labelMore: string;
  labelLess?: string;
  className?: string;
  as?: "ul" | "ol" | "div";
}) {
  const [open, setOpen] = useState(false);
  const hidden = children.length - initial;

  return (
    <>
      <Tag className={className}>
        {children.map((child, i) =>
          i < initial || open ? (
            child
          ) : (
            <li key={i} hidden aria-hidden="true" className="hidden" />
          ),
        )}
      </Tag>

      {hidden > 0 && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="btn btn-quiet"
          >
            {open ? labelLess : labelMore}
            <ChevronDown
              size={15}
              strokeWidth={2}
              aria-hidden="true"
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </>
  );
}
