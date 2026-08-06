import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ISKCON Nairobi | Sri Sri Radha Bankebihari Temple",
    short_name: "ISKCON Nairobi",
    description:
      "Daily darshan, kirtan, prasadam, festivals, spiritual education, and service in Nairobi.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#f4ece1",
    theme_color: "#3a2a24",
    icons: [
      {
        src: "/brand/icon-192.png?v=pwa-full-logo-safe-2026-08-06",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/icon-192.png?v=pwa-full-logo-safe-2026-08-06",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/brand/icon-512.png?v=pwa-full-logo-safe-2026-08-06",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/icon-512.png?v=pwa-full-logo-safe-2026-08-06",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
