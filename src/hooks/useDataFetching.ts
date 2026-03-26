import { useState, useEffect, useRef } from "react";
import { getCachedData, setCachedData } from "../utils/cache";

interface FetchState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}

export function useDataFetching<T>(
  fetchFn: () => Promise<T[]>,
  cacheKey: string
) {
  const [state, setState] = useState<FetchState<T>>({
    data: [],
    loading: true,
    error: null,
  });

  const fetchFnRef = useRef(fetchFn);
  fetchFnRef.current = fetchFn;
  const cacheKeyRef = useRef<string>(cacheKey);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      console.log(`[useDataFetching] Starting fetch for: ${cacheKeyRef.current}`);

      // Check cache first
      const cachedData = getCachedData<T[]>(cacheKeyRef.current);
      if (cachedData) {
        console.log(`[useDataFetching] Cache hit for: ${cacheKeyRef.current}, data:`, cachedData);
        if (mounted) {
          setState({ data: cachedData, loading: false, error: null });
        }
        return;
      }

      console.log(`[useDataFetching] Cache miss for: ${cacheKeyRef.current}, fetching...`);

      try {
        setState((prev) => ({ ...prev, loading: true }));
        const result = await fetchFnRef.current();
        console.log(`[useDataFetching] Fetch success for: ${cacheKeyRef.current}, items:`, result.length);

        // Cache the result
        setCachedData(cacheKeyRef.current, result);

        if (mounted) {
          setState({ data: result, loading: false, error: null });
        }
      } catch (err) {
        console.error(`[useDataFetching] Fetch error for: ${cacheKeyRef.current}`, err);
        if (mounted) {
          setState({
            data: [],
            loading: false,
            error: err instanceof Error ? err.message : "An error occurred",
          });
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  return state;
}
