import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import PageBackdrop from "@/components/ui/PageBackdrop";
import { SITE, PROFILE, LINKS } from "@/content/profile";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

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
  other: { "msapplication-TileColor": "#0a0c12" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0c12" },
  ],
  // Pinch zoom deliberately left enabled; the old build blocked it.
  width: "device-width",
  initialScale: 1,
};

/** Set the theme before first paint so the toggle never flashes. */
const THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

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
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>
        <PageBackdrop />
        {children}
      </body>
      <GoogleAnalytics gaId="G-D8T0VT49PX" />
    </html>
  );
}
