import { useState, useEffect } from 'react';

export default function useProgressFetch(url) {
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setProgress(0);

      try {
        const res = await fetch(url, { signal: controller.signal });
        const reader = res.body.getReader();

        const contentLength = Number(res.headers.get('Content-Length'));
        console.log(res.headers.get('Content-Length'));
        let receivedLength = 0;
        let chunks = [];

        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { done, value } = await reader.read();
          console.log('DONE', done);
          if (done) break;
          console.log(value);
          chunks.push(value);
          receivedLength += value.length;
          if (contentLength) {
            setProgress((receivedLength / contentLength) * 100);
          }
        }
        let chunksAll = new Uint8Array(receivedLength);
        let position = 0;
        for (let chunk of chunks) {
          chunksAll.set(chunk, position);
          position += chunk.length;
        }
        let result = new TextDecoder('utf-8').decode(chunksAll);
        const data = JSON.parse(result);
        setData(data);
      } catch (error) {
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

  return [data, progress, loading, error];
}
