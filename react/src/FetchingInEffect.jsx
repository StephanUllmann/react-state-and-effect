import { useEffect, useState } from 'react';

export default function FetchingInEffect() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      if (error) setError(null);
      try {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?count=5&api_key=${import.meta.env.VITE_API_KEY}`, {
          signal: controller.signal,
        });
        if (res.ok) {
          const data = await res.json();
          setData(data);
        } else {
          // console.log(res);
          const { message } = await res.json();
          throw Error(message);
        }
      } catch (error) {
        // console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [error]);

  console.log(data);
  return loading || data.length === 0 ? (
    <h1 className='text-2xl mb-7'>Loading...</h1>
  ) : (
    <>
      <h1 className='text-2xl mb-7'>Beautiful Stars</h1>
      <div className='flex gap-5 flex-wrap'>
        {data.map((item) => (
          <div key={item.url} className='w-60'>
            <h2 className='text-xl mb-7'>{item.title}</h2>
            <img src={item.url} alt={item.title} className='w-full object-scale-down' />
            <p>{item.explanation}</p>
          </div>
        ))}
      </div>
    </>
  );
}
