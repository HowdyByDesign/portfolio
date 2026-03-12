import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-instrument)", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        signet: ["var(--font-signet)", "serif"],
      },
      fontSize: {
        // Fluid type scale — all headings use clamp() for seamless scaling
        "display": ["clamp(2.75rem, 5.5vw + 0.75rem, 5rem)", { lineHeight: "1.01", letterSpacing: "-0.04em" }],
        "h1":      ["clamp(2.25rem, 4vw + 0.75rem, 3.75rem)", { lineHeight: "1.04", letterSpacing: "-0.035em" }],
        "h2":      ["clamp(1.625rem, 2.5vw + 0.5rem, 2.5rem)",  { lineHeight: "1.1",  letterSpacing: "-0.025em" }],
        "h3":      ["clamp(1.25rem, 1.5vw + 0.5rem, 1.875rem)", { lineHeight: "1.2",  letterSpacing: "-0.02em"  }],
        "h4":      ["clamp(1rem, 0.75vw + 0.5rem, 1.375rem)",   { lineHeight: "1.3",  letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        "prose-wide": "68ch",
      },
      colors: {
        accent: {
          DEFAULT: "#FF3200",
          hover:   "#CC2800",
        },
        // Warm neutral palette — zinc-equivalent tinted toward #FF3200 at ~4% saturation
        // Each step is perceptually balanced; the warmth is felt, not seen
        warm: {
          50:  "#faf8f7",
          100: "#f3efec",
          200: "#e5dfda",
          300: "#cdc6be",
          400: "#b0a79d",
          500: "#928881",
          600: "#756c65",
          700: "#5e564f",
          800: "#3e3833",
          900: "#252120",
          950: "#161312",
        },
      },
      // Named easing functions — use as transition-timing class e.g. ease-out-expo
      transitionTimingFunction: {
        "out-expo":    "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart":   "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "700": "700ms",
      },
    },
  },
  plugins: [],
};

export default config;
