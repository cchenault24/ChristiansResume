/**
 * Type for functions that can be throttled
 */
type ThrottleableFunction = () => void;

/**
 * Throttle function to limit how often a function can be called
 * @param func Function to throttle
 * @param limit Time limit in milliseconds
 * @returns Throttled function
 */
export function throttle(
  func: ThrottleableFunction,
  limit: number
): ThrottleableFunction {
  let inThrottle: boolean;
  return function () {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * RequestAnimationFrame-based throttle for smooth scroll performance
 * @param func Function to throttle
 * @returns Throttled function using requestAnimationFrame
 */
export function rafThrottle(func: ThrottleableFunction): ThrottleableFunction {
  let rafId: number | null = null;
  return function () {
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        func();
        rafId = null;
      });
    }
  };
}
