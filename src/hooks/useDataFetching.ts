import { useState, useEffect, useRef } from "react";
import { getCachedData, setCachedData, generateCacheKey } from "../utils/cache";

interface FetchState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}

export function useDataFetching<T>(fetchFn: () => Promise<T[]>) {
  const [state, setState] = useState<FetchState<T>>({
    data: [],
    loading: true,
    error: null,
  });

  const fetchFnRef = useRef(fetchFn);
  fetchFnRef.current = fetchFn;
  const cacheKeyRef = useRef<string>(generateCacheKey(fetchFn));

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      // Check cache first
      const cachedData = getCachedData<T[]>(cacheKeyRef.current);
      if (cachedData) {
        if (mounted) {
          setState({ data: cachedData, loading: false, error: null });
        }
        return;
      }

      try {
        setState((prev) => ({ ...prev, loading: true }));
        const result = await fetchFnRef.current();

        // Cache the result
        setCachedData(cacheKeyRef.current, result);

        if (mounted) {
          setState({ data: result, loading: false, error: null });
        }
      } catch (err) {
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
