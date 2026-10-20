import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c62828",
        white: "#fff",
        cream: "#f4f5ee",
        navy: "#1f2937",
        accent: "#e53935",
        mist: "#e5e7eb",
        body: "#474743",
        beige: "#e7e0d8",
        deep: "#374151",
        sky: "#ef8f8c",
        yellow: "#f6e304",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      maxWidth: { site: "1240px" },
      borderRadius: { card: "20px" },
    },
  },
  plugins: [],
};

export default config;
