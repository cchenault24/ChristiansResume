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
