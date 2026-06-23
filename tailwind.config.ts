import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        sunset: "var(--color-sunset)",
        acacia: "var(--color-acacia)",
        dusk: "var(--color-dusk)",
        sand: "var(--color-sand)",
        gold: {
          DEFAULT: "var(--color-gold)",
          light: "var(--color-gold-light)",
          dark: "var(--color-gold-dark)",
        },
        temple: {
          brown: "var(--color-dusk)",
          cream: "var(--color-sand)",
          sand: "var(--color-temple-sand)",
          bg: "var(--color-sand)",
        },
        forest: "var(--color-acacia)",
        saffron: "var(--color-sunset)",
        ink: "var(--color-dusk)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 7vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "0" }],
        "display-lg": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "0" }],
        "display-md": ["clamp(1.5rem, 3.5vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "0" }],
        "display-sm": ["clamp(1.25rem, 2.5vw, 2rem)", { lineHeight: "1.2" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.65" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "label": ["0.75rem", { lineHeight: "1", letterSpacing: "0.12em" }],
      },
      spacing: {
        "section": "clamp(4rem, 8vw, 8rem)",
        "section-sm": "clamp(2.5rem, 5vw, 5rem)",
      },
      maxWidth: {
        "content": "1280px",
        "prose": "720px",
        "narrow": "560px",
      },
      aspectRatio: {
        "cinema": "21 / 9",
        "portrait": "3 / 4",
        "card": "4 / 3",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1.2s ease forwards",
        "counter": "counter 2s ease-out forwards",
        "line-expand": "lineExpand 1s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        lineExpand: {
          from: { scaleX: "0" },
          to: { scaleX: "1" },
        },
      },
      boxShadow: {
        "card": "0 4px 24px -4px rgba(94, 59, 31, 0.12)",
        "card-hover": "0 12px 40px -8px rgba(94, 59, 31, 0.2)",
        "gold": "0 0 0 1px rgba(199, 154, 59, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
