import { useState, useEffect, useCallback } from "react";

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

  const memoizedFetchFn = useCallback(fetchFn, []);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));
        const result = await memoizedFetchFn();
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
  }, [memoizedFetchFn]);

  return state;
}
