import { DM_Serif_Display, Geist, Geist_Mono, Outfit } from "next/font/google";
import type { SpecimenFont } from "@/content/types";

/*
 * The products' own typefaces, used only for the type specimens on case study
 * pages. None of them is preloaded: they are below the fold and must not
 * compete with the page's own fonts for the first paint.
 */

const outfit = Outfit({ subsets: ["latin"], weight: ["400"], display: "swap", preload: false });

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
  preload: false,
});

const geist = Geist({ subsets: ["latin"], weight: ["900"], display: "swap", preload: false });

const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400"], display: "swap", preload: false });

/**
 * JetBrains Mono, Archivo, Instrument Serif and Inter are this site's own
 * faces, so they map to the theme; "system" is the platform UI font.
 */
export const SPECIMEN_CLASS: Record<SpecimenFont, string> = {
  outfit: outfit.className,
  dmSerif: dmSerif.className,
  jetbrains: "font-mono",
  geist: geist.className,
  geistMono: geistMono.className,
  system: "specimen-system",
  archivo: "specimen-archivo",
  instrument: "font-serif italic",
  inter: "font-sans",
};
