import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#eef2f8",
          100: "#d5dff0",
          200: "#aabfe1",
          300: "#7a9acf",
          400: "#4f78bc",
          500: "#305aa3",
          600: "#1e3f7a",
          700: "#163060",
          800: "#0e2149",
          900: "#081535",
          950: "#040c20",
        },
        gold: {
          300: "#f5d78e",
          400: "#e8c05a",
          500: "#c9973a",
          600: "#a87828",
          700: "#7d5519",
        },
        cream: "#f8f5ef",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Raleway'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(ellipse at 20% 50%, rgba(14, 33, 73, 0.95) 0%, rgba(4, 12, 32, 1) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        shimmer: "shimmer 2.5s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
