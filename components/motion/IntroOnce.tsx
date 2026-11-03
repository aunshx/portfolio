"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * The loading screen plays once per tab. The bootstrap in the root layout
 * only runs on a full page load, so a link back home would find the `intro`
 * class still set and play it again. Leaving home clears it for good.
 */
export default function IntroOnce() {
  const path = usePathname();
  useEffect(() => {
    if (path !== "/") document.documentElement.classList.remove("intro");
  }, [path]);
  return null;
}
