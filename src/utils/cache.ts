/**
 * Simple in-memory cache for GraphQL queries
 * Cache expires after 5 minutes
 */
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

interface CacheEntry {
  data: string; // Store as JSON string for type safety
  timestamp: number;
}

const cache = new Map<string, CacheEntry>();

export function getCachedData<T>(key: string): T | null {
  const entry = cache.get(key);
  if (!entry) return null;

  const now = Date.now();
  if (now - entry.timestamp > CACHE_DURATION) {
    cache.delete(key);
    return null;
  }

  try {
    return JSON.parse(entry.data) as T;
  } catch {
    return null;
  }
}

export function setCachedData<T>(key: string, data: T): void {
  try {
    cache.set(key, {
      data: JSON.stringify(data),
      timestamp: Date.now(),
    });
  } catch {
    // If data cannot be serialized, don't cache it
  }
}

export function clearCache(): void {
  cache.clear();
}

/**
 * Generate a cache key from a function
 */
export function generateCacheKey(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fn: (...args: any[]) => any,
  args?: string
): string {
  const fnString = fn.toString();
  const argsString = args || "";
  return `${fnString}-${argsString}`;
}
