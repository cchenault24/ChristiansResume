import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

// Extend Vitest's expect method with jest-dom matchers
expect.extend(matchers);

// Cleanup after each test case
afterEach(() => {
  cleanup();
});

// Mock import.meta.env for tests
Object.defineProperty(import.meta, "env", {
  get() {
    return {
      VITE_EMAILJS_SERVICE_ID: "test_service_id",
      VITE_EMAILJS_TEMPLATE_ID: "test_template_id",
      VITE_EMAILJS_PUBLIC_KEY: "test_public_key",
    };
  },
  configurable: true,
});

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  }),
});
