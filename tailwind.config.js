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
      colors: {
        dark: "#0f172a",
        accent: "#22c55e", // Neon green
        secondary: "#eab308", // Yellow
        light: "#f8fafc",
      },
      boxShadow: {
        neon: "0 0 15px #22c55e",
        subtle: "0 5px 20px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
