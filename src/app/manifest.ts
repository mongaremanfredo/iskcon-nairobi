import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ISKCON Nairobi - Sri Sri Radha Bankebihari Temple",
    short_name: "ISKCON Nairobi",
    description:
      "Daily darshan, kirtan, prasadam, festivals, spiritual education, and service in Nairobi.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f4ece1",
    theme_color: "#3a2a24",
    icons: [
      {
        src: "/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
