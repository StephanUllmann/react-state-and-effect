import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url, {
          signal: controller.signal,
        });
        if (res.ok) {
          const data = await res.json();
          setData(data);
        } else {
          // console.log(res);
          const { message } = await res.json();
          const errorMessage = message || 'An error occurred.';
          throw Error(errorMessage);
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}
