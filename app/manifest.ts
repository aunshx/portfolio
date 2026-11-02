import type { MetadataRoute } from "next";
import { SITE, PROFILE } from "@/content/profile";

/** The web app manifest, in the site's paper and ink. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: PROFILE.name,
    short_name: PROFILE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f3f1ec",
    theme_color: "#f3f1ec",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
