import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "ISKCON Nairobi | Sri Sri Radha Bankebihari Temple",
    short_name: "ISKCON Nairobi",
    description:
      "Daily darshan, kirtan, prasadam, festivals, spiritual education, and service in Nairobi.",
    start_url: "/",
    scope: "/",
    lang: "en-KE",
    dir: "ltr",
    display: "standalone",
    background_color: "#f4ece1",
    theme_color: "#3a2a24",
    categories: ["religion", "community", "education"],
    shortcuts: [
      {
        name: "Plan Your Visit",
        short_name: "Visit",
        description: "Temple timings, directions, and visitor guidance.",
        url: "/visit",
        icons: [{ src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" }],
      },
      {
        name: "Temple Calendar",
        short_name: "Calendar",
        description: "Upcoming festivals and sacred calendar dates.",
        url: "/festivals",
        icons: [{ src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" }],
      },
    ],
    icons: [
      {
        src: "/brand/icon-192.png?v=pwa-resilient-2026-08-24",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/maskable-icon-192.png?v=pwa-safe-zone-2026-08-24",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/brand/icon-512.png?v=pwa-resilient-2026-08-24",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/maskable-icon-512.png?v=pwa-safe-zone-2026-08-24",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
