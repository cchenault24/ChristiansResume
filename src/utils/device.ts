/**
 * Detect if the device is mobile or has reduced motion preference
 */
export const isMobile = (): boolean => {
  if (typeof window === "undefined") return false;
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768
  );
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Extended Navigator interface for device memory
 */
interface NavigatorWithDeviceMemory extends Navigator {
  deviceMemory?: number;
}

/**
 * Check if device has low performance capabilities
 */
export const isLowEndDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  // Check for hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 4;
  // Check for device memory (if available)
  const navigatorWithMemory = navigator as NavigatorWithDeviceMemory;
  const memory = navigatorWithMemory.deviceMemory || 4;

  return cores <= 2 || memory <= 2 || isMobile();
};

/**
 * Should use reduced animations
 */
export const shouldReduceAnimations = (): boolean => {
  return prefersReducedMotion() || isLowEndDevice();
};
