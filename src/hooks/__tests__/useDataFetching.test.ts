import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useDataFetching } from "../useDataFetching";
import * as cache from "../../utils/cache";

// Mock the cache module
vi.mock("../../utils/cache", () => ({
  getCachedData: vi.fn(),
  setCachedData: vi.fn(),
}));

interface TestData {
  id: number;
  name: string;
}

describe("useDataFetching", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  describe("Loading State", () => {
    it("should start with loading state", () => {
      const mockFetch = vi.fn(
        () => new Promise<TestData[]>(() => {}) // Never resolves
      );

      const { result } = renderHook(() =>
        useDataFetching(mockFetch, "test-cache-key")
      );

      expect(result.current.loading).toBe(true);
      expect(result.current.data).toEqual([]);
      expect(result.current.error).toBeNull();
    });

    it("should set loading to false after successful fetch", async () => {
      const mockData: TestData[] = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
      ];
      const mockFetch = vi.fn().mockResolvedValue(mockData);
      vi.mocked(cache.getCachedData).mockReturnValue(null);

      const { result } = renderHook(() =>
        useDataFetching(mockFetch, "test-cache-key")
      );

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.data).toEqual(mockData);
      expect(result.current.error).toBeNull();
    });

    it("should set loading to false after fetch error", async () => {
      const mockFetch = vi.fn().mockRejectedValue(new Error("Fetch failed"));
      vi.mocked(cache.getCachedData).mockReturnValue(null);

      const { result } = renderHook(() =>
        useDataFetching(mockFetch, "test-cache-key")
      );

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.data).toEqual([]);
      expect(result.current.error).toBe("Fetch failed");
    });
  });

  describe("Successful Data Fetch", () => {
    it("should fetch and return data successfully", async () => {
      const mockData: TestData[] = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ];
      const mockFetch = vi.fn().mockResolvedValue(mockData);
      vi.mocked(cache.getCachedData).mockReturnValue(null);

      const { result } = renderHook(() =>
        useDataFetching(mockFetch, "test-cache-key")
      );

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.data).toEqual(mockData);
      expect(result.current.error).toBeNull();
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    it("should cache fetched data", async () => {
      const mockData: TestData[] = [{ id: 1, name: "Item 1" }];
      const mockFetch = vi.fn().mockResolvedValue(mockData);
      vi.mocked(cache.getCachedData).mockReturnValue(null);

      renderHook(() => useDataFetching(mockFetch, "test-cache-key"));

      await waitFor(() => {
        expect(cache.setCachedData).toHaveBeenCalledWith(
          "test-cache-key",
          mockData
        );
      });
    });

    it("should return cached data if available", async () => {
      const cachedData: TestData[] = [{ id: 1, name: "Cached Item" }];
      const mockFetch = vi.fn();
      vi.mocked(cache.getCachedData).mockReturnValue(cachedData);

      const { result } = renderHook(() =>
        useDataFetching(mockFetch, "test-cache-key")
      );

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.data).toEqual(cachedData);
      expect(result.current.error).toBeNull();
      expect(mockFetch).not.toHaveBeenCalled();
    });

    it("should handle empty data arrays", async () => {
      const mockData: TestData[] = [];
      const mockFetch = vi.fn().mockResolvedValue(mockData);
      vi.mocked(cache.getCachedData).mockReturnValue(null);

      const { result } = renderHook(() =>
        useDataFetching(mockFetch, "test-cache-key")
      );

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.data).toEqual([]);
      expect(result.current.error).toBeNull();
    });
  });

  describe("Error Handling", () => {
    it("should handle fetch errors with Error object", async () => {
      const errorMessage = "Network error occurred";
      const mockFetch = vi.fn().mockRejectedValue(new Error(errorMessage));
      vi.mocked(cache.getCachedData).mockReturnValue(null);

      const { result } = renderHook(() =>
        useDataFetching(mockFetch, "test-cache-key")
      );

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.data).toEqual([]);
      expect(result.current.error).toBe(errorMessage);
    });

    it("should handle fetch errors with non-Error objects", async () => {
      const mockFetch = vi.fn().mockRejectedValue("String error");
      vi.mocked(cache.getCachedData).mockReturnValue(null);

      const { result } = renderHook(() =>
        useDataFetching(mockFetch, "test-cache-key")
      );

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.data).toEqual([]);
      expect(result.current.error).toBe("An error occurred");
    });

    it("should handle null/undefined errors", async () => {
      const mockFetch = vi.fn().mockRejectedValue(null);
      vi.mocked(cache.getCachedData).mockReturnValue(null);

      const { result } = renderHook(() =>
        useDataFetching(mockFetch, "test-cache-key")
      );

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.data).toEqual([]);
      expect(result.current.error).toBe("An error occurred");
    });

    it("should not cache data when fetch fails", async () => {
      const mockFetch = vi.fn().mockRejectedValue(new Error("Fetch failed"));
      vi.mocked(cache.getCachedData).mockReturnValue(null);

      renderHook(() => useDataFetching(mockFetch, "test-cache-key"));

      await waitFor(() => {
        expect(cache.setCachedData).not.toHaveBeenCalled();
      });
    });
  });

  describe("Component Lifecycle", () => {
    it("should not update state after unmount", async () => {
      const mockData: TestData[] = [{ id: 1, name: "Item 1" }];
      let resolveFetch: (value: TestData[]) => void;
      const mockFetch = vi.fn(
        () =>
          new Promise<TestData[]>((resolve) => {
            resolveFetch = resolve;
          })
      );
      vi.mocked(cache.getCachedData).mockReturnValue(null);

      const { result, unmount } = renderHook(() =>
        useDataFetching(mockFetch, "test-cache-key")
      );

      expect(result.current.loading).toBe(true);

      // Unmount before fetch completes
      unmount();

      // Resolve fetch after unmount
      resolveFetch!(mockData);

      // Wait a bit to ensure no state updates occur
      await new Promise((resolve) => setTimeout(resolve, 100));

      // The hook should still show loading state since it was unmounted
      expect(result.current.loading).toBe(true);
      expect(result.current.data).toEqual([]);
    });

    it("should only fetch data once on mount", async () => {
      const mockData: TestData[] = [{ id: 1, name: "Item 1" }];
      const mockFetch = vi.fn().mockResolvedValue(mockData);
      vi.mocked(cache.getCachedData).mockReturnValue(null);

      const { rerender } = renderHook(() =>
        useDataFetching(mockFetch, "test-cache-key")
      );

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledTimes(1);
      });

      // Rerender shouldn't trigger another fetch
      rerender();
      rerender();
      rerender();

      expect(mockFetch).toHaveBeenCalledTimes(1);
    });
  });

  describe("Cache Integration", () => {
    it("should check cache before fetching", async () => {
      const cachedData: TestData[] = [{ id: 1, name: "Cached" }];
      const mockFetch = vi.fn();
      vi.mocked(cache.getCachedData).mockReturnValue(cachedData);

      renderHook(() => useDataFetching(mockFetch, "test-cache-key"));

      await waitFor(() => {
        expect(cache.getCachedData).toHaveBeenCalledWith("test-cache-key");
      });

      expect(mockFetch).not.toHaveBeenCalled();
    });

    it("should fetch and cache when cache is empty", async () => {
      const mockData: TestData[] = [{ id: 1, name: "Fresh" }];
      const mockFetch = vi.fn().mockResolvedValue(mockData);
      vi.mocked(cache.getCachedData).mockReturnValue(null);

      renderHook(() => useDataFetching(mockFetch, "test-cache-key"));

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalled();
        expect(cache.setCachedData).toHaveBeenCalledWith(
          "test-cache-key",
          mockData
        );
      });
    });
  });
});
