export default {
  plugins: {
    "@tailwindcss/postcss": {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      safelist: [
        // Add any classes that are dynamically created here
        /^bg-/,
        /^text-/,
        /^hover:/,
      ],
    },
    autoprefixer: {},
  },
};
