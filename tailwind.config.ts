import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1F1C",      // near-black deep green — primary text / dark bg
        paper: "#F7F5EF",    // warm paper white — page background
        clay: "#E8633C",     // warm clay-orange — accent, CTAs, active range marker
        sage: "#41564F",     // muted sage — secondary text, borders
        line: "#D9D4C7",     // hairline rule color on paper bg
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
