import { useState } from 'react';

export default function QueueingStateUpdates() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className='text-2xl mb-7'>Queueing State Updates</h1>

      <p>
        Count: <strong>{count}</strong>
      </p>
      <button
        className='my-5 mx-2 py-2 px-4 border border-red-600 rounded'
        type='button'
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        +3 ???
      </button>
      <button
        className='my-5 mx-2 py-2 px-4 border border-green-600 rounded'
        type='button'
        onClick={() => {
          setCount((previousCount) => previousCount + 1);
          setCount((previousCount) => previousCount + 1);
          setCount((previousCount) => previousCount + 1);
        }}
      >
        +3 !!!
      </button>
      <button
        className='my-5 mx-2 py-2 px-4 border border-blue-600 rounded'
        type='button'
        onClick={() => {
          setCount(count + 5);
          setCount((previousCount) => previousCount + 1);
        }}
      >
        ? Set then update ?
      </button>
      <button
        className='my-5 mx-2 py-2 px-4 border border-slate-600 rounded'
        type='button'
        onClick={() => {
          setCount(count + 5);
          setCount((previousCount) => previousCount + 1);
          setCount(42);
        }}
      >
        ? Update then set ?
      </button>
    </div>
  );
}
