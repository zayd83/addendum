import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Brand tokens ── */
        midnight: "var(--midnight)",
        "midnight-mid": "var(--midnight-mid)",
        "brand-cyan": "var(--brand-cyan)",
        "brand-cyan-bright": "var(--brand-cyan-bright)",
        "warm-white": "var(--warm-white)",
        "warm-surface": "var(--warm-surface)",
        "near-black": "var(--near-black)",
        "whatsapp-green": "var(--whatsapp-green)",

        /* Legacy aliases */
        navy: "var(--navy)",
        "accent-blue": "var(--accent-blue)",
        "soft-gray": "var(--soft-gray)",
        "dark-text": "var(--dark-text)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-geist)", "Geist", "system-ui", "sans-serif"],
        display: ["var(--font-instrument-serif)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "Geist Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
}

export default config
