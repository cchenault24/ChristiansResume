export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        subtle: "0 5px 20px rgba(0, 0, 0, 0.3)",
        neon: "0 0 15px #22c55e",
      },
      backdropBlur: {
        md: "12px",
      },
      backgroundColor: {
        "black/30": "rgba(0, 0, 0, 0.3)",
      },
      fontSize: {
        heading: {
          sm: ["2rem", "2.5rem"],
          md: ["2.5rem", "3rem"],
          lg: ["3rem", "3.5rem"],
        },
        subheading: {
          sm: ["1.25rem", "1.75rem"],
          md: ["1.5rem", "2rem"],
          lg: ["1.75rem", "2.25rem"],
        },
        body: {
          sm: ["0.875rem", "1.25rem"],
          md: ["1rem", "1.5rem"],
          lg: ["1.125rem", "1.75rem"],
        },
      },
      fontWeight: {
        heading: "700",
        subheading: "600",
        body: "400",
      },
    },
    safelist: ["shadow-neon", "hover:shadow-neon"],
  },
  darkMode: "class",
  plugins: [nextui()],
  // This will ensure unused styles are purged in production
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    options: {
      safelist: [
        // Add any classes that are dynamically created here
        /^bg-/,
        /^text-/,
        /^hover:/,
      ],
    },
  },
};
