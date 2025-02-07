// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
      },
      colors: {
        dark: "#0A0A0A", // Deep black
        light: "#F5F5F5", // Soft white
        accent: "#FF6B6B", // Vibrant red/pink
        secondary: "#4ECDC4", // Teal for contrast
        gray: {
          800: "#1F1F1F", // Dark gray for backgrounds
          700: "#2D2D2D", // Slightly lighter gray
          400: "#A3A3A3", // Light gray for text
        },
      },
      boxShadow: {
        neon: "0 0 15px #22c55e",
        subtle: "0 5px 20px rgba(0, 0, 0, 0.3)",
      },
      backdropBlur: {
        md: "12px",
      },
      backgroundColor: {
        "black/30": "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
