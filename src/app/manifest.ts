import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MUSTDRINK",
    short_name: "MUSTDRINK",
    description:
      "The modern Indian alternative to coffee. Sustained energy, better digestion, no caffeine crash.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3ed",
    theme_color: "#2d4a3e",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
