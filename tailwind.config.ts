import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Legacy tokens (kept: still referenced across the codebase) ---
        // `ink` is now an object so existing `text-ink` / `bg-ink` (DEFAULT)
        // keep working while the ink-900..100 luxury scale is added.
        ink: {
          DEFAULT: "#0B1F1C", // near-black deep green — primary text / dark bg
          900: "#0F1F18",     // primary text (same as forest-900)
          700: "#2C3E35",     // secondary text
          500: "#4A5E54",     // muted text, captions
          300: "#8A9E94",     // placeholder text
          100: "#D4DDD8",     // disabled text
        },
        paper: "#F7F5EF",    // warm paper white — page background
        clay: "#E8633C",     // warm clay-orange — accent, CTAs, active range marker
        sage: "#41564F",     // muted sage — secondary text, borders
        line: "#D9D4C7",     // hairline rule color on paper bg

        // --- Forest greens (brand foundation) ---
        forest: {
          950: "#0A1510",
          900: "#0F1F18",
          800: "#1A3329",
          700: "#244D3A",
          600: "#2D5A3D",
          400: "#7BAF8C",
          200: "#C4DEC9",
          50: "#F0F7F2",
        },
        // --- Gold (luxury accent — use sparingly) ---
        gold: {
          600: "#8A6A38",
          500: "#B8966A",
          400: "#D4BC91",
          200: "#EDD9B0",
          100: "#F8F1E0",
        },
        // --- Ivory / warm whites ---
        ivory: {
          100: "#FAFAF7",
          200: "#F5F0E8",
          300: "#EDE7D9",
        },
      },
      fontFamily: {
        // `sans` now leads with DM Sans (body font) while keeping Inter as a
        // fallback so existing `font-sans` usages inherit the new body type.
        sans: ["var(--font-dm-sans)", "var(--font-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        mono: [
          // --font-jetbrains-mono is not defined in this project; fall back to
          // the actual JetBrains Mono variable (--font-mono) so calculator
          // numerals stay in JetBrains Mono. An unfallbacked undefined var()
          // would invalidate the whole font-family declaration.
          "var(--font-jetbrains-mono, var(--font-mono))",
          "var(--font-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
      },
      letterSpacing: {
        display: "-0.03em",
        wide: "0.08em",
        widest: "0.14em",
      },
      borderWidth: {
        hairline: "1px",
      },
      boxShadow: {
        "luxury-sm":
          "0 1px 3px rgba(15,31,24,0.06), 0 1px 2px rgba(15,31,24,0.04)",
        "luxury-md":
          "0 4px 16px rgba(15,31,24,0.08), 0 2px 6px rgba(15,31,24,0.05)",
        "luxury-lg":
          "0 12px 40px rgba(15,31,24,0.12), 0 4px 12px rgba(15,31,24,0.07)",
        "gold-glow": "0 0 0 1px rgba(184,150,106,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
