import React from "react";

export const useFetch = (url: string, fetchOptions: any) => {
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const abortController = new AbortController();
  const signal = abortController.signal;

  async function fetchData(url: string, fetchOptions: any) {
    try {
      const response = await fetch(url, { ...fetchOptions, signal });
      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  }

  React.useEffect(() => {
    setIsLoading(true);
    fetchData(url, fetchOptions)
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return { isLoading, error, data };
};
