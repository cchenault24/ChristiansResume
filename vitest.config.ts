import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
    env: {
      VITE_EMAILJS_SERVICE_ID: "test_service_id",
      VITE_EMAILJS_TEMPLATE_ID: "test_template_id",
      VITE_EMAILJS_PUBLIC_KEY: "test_public_key",
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "src/test/",
        "*.config.ts",
        "**/*.d.ts",
        "**/__tests__/**",
      ],
    },
  },
});
