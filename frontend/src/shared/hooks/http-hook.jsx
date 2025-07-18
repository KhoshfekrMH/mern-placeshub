import { useState, useCallback, useRef, useEffect } from "react";

export function useHttpClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl,
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message || "Something went wrong, please try again.");
        setIsLoading(false);

        throw err;
      }
    },
    [],
  );

  function clearError() {
    setError(null);
  }

  useEffect(() => {
    const abortCtrl = new AbortController();
    activeHttpRequests.current.push(abortCtrl);

    return () => {
      activeHttpRequests.current = activeHttpRequests.current.filter(
        (reqCtrl) => reqCtrl !== abortCtrl,
      );
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
}
