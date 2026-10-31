import type { Metadata, Viewport } from "next";
import { Archivo, Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE, PROFILE, LINKS } from "@/content/profile";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display face: a variable grotesk whose weight and width the hero bends
// toward the pointer.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
});

// Italic serif for asides and jokes.
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

// Only the case studies set type in mono, so the home page doesn't preload it.
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
  preload: false,
});

// Analytics only on the live site: not in development, and not on Netlify
// deploy previews or branch deploys (CONTEXT is set by Netlify at build time).
const ANALYTICS =
  process.env.NODE_ENV === "production" &&
  (process.env.CONTEXT ?? "production") === "production";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s | Aunsh Bandivadekar",
  },
  description: SITE.description,
  authors: [{ name: PROFILE.name, url: SITE.url }],
  creator: PROFILE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: PROFILE.name,
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: { "msapplication-TileColor": "#f3f1ec" },
};

export const viewport: Viewport = {
  themeColor: "#f3f1ec",
  colorScheme: "light",
  // Pinch zoom deliberately left enabled; the old build blocked it.
  width: "device-width",
  initialScale: 1,
};

/**
 * Runs before first paint. `motion` turns on the animated layer; `intro`
 * plays the loading screen once per browser session. Reduced motion gets
 * neither.
 */
const MOTION_BOOTSTRAP = `(function(){try{var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion');if(location.pathname==='/'&&!sessionStorage.getItem('intro')){d.classList.add('intro');sessionStorage.setItem('intro','1');}}catch(e){}})();`;

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  url: SITE.url,
  jobTitle: PROFILE.role,
  description: SITE.description,
  worksFor: { "@type": "Organization", name: "University of California, Davis" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of California, Davis" },
    { "@type": "CollegeOrUniversity", name: "University of Pune" },
  ],
  knowsAbout: [
    "Spatial AI",
    "Geospatial decision support",
    "Machine learning",
    "Forest biomass",
  ],
  sameAs: [LINKS.github, LINKS.linkedin, LINKS.medium],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${archivo.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOTSTRAP }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>{children}</body>
      {ANALYTICS && <GoogleAnalytics gaId="G-D8T0VT49PX" />}
    </html>
  );
}
