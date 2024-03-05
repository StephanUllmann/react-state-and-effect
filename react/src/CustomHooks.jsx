import useLocation from './useLocation';
import useFetch from './useFetch';
// import useProgressFetch from './useProgressFetch';

export default function CustomHooks() {
  const location = useLocation();

  // const [data, loading, error] = useFetch('../data.json');
  const { data, loading, error } = useFetch(
    `https://api.nasa.gov/planetary/apod?&api_key=${import.meta.env.VITE_API_KEY}&count=12`
  );
  // const [data, progress, loading, error] = useProgressFetch('../data.json');
  // const [data, progress, loading, error] = useProgressFetch(
  //   `https://api.nasa.gov/planetary/apod?&count=10&api_key=${import.meta.env.VITE_API_KEY}`
  // );

  // console.log(data, loading, error);

  return (
    <>
      <h1 className='text-2xl mb-7'>Custom Hooks</h1>
      {location && (
        <p>
          Lat: {location.lat} | Long: {location.long}
        </p>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {/* {progress !== 0 && progress !== 100 && <progress value={progress}>{progress}%</progress>} */}
      {/* {data && (
        <div className='w-60'>
          <h2 className='text-xl mb-7'>{data.title}</h2>
          <img src={data.url} alt={data.title} className='w-full object-scale-down' />
          <p>{data.explanation}</p>
        </div>
      )} */}
      <div className='flex gap-5 flex-wrap my-10 mx-20 max-w-screen-lg'>
        {data &&
          data.map((item) => (
            <div key={item.url} className='w-60'>
              <h2 className='text-xl mb-7'>{item.title}</h2>
              <img
                src={item.url}
                alt={item.title}
                className='w-full object-scale-down'
                loading='lazy'
                decoding='async'
              />
              <p>{item.explanation}</p>
            </div>
          ))}
      </div>
    </>
  );
}
