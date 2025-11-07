import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"]
      },
      colors: {
        background: "#05050A",
        accent: "#FF9F1C",
        accentSoft: "#FFE5B4",
        secondary: "#2EC4B6",
        neutral: "#F7F7FF"
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 159, 28, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
