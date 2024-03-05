import { useState } from 'react';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
export default function Letters() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let currentLetter = alphabet[index];

  const nextLetter = () => {
    if (index < alphabet.length - 1) setIndex((i) => i + 1);
    else setIndex(0);
  };

  return (
    <div className='border py-2 px-4 rounded'>
      <p>{currentLetter}</p>
      <button className='my-5 py-2 px-4 border rounded' type='button' onClick={nextLetter}>
        Next Letter &rarr;
      </button>

      <button onClick={() => setShowMore((prev) => !prev)} type='button' className='my-4 py-2 px-4 border rounded'>
        Show {showMore ? 'less' : 'more'}
      </button>
      {showMore && (
        <div className='text-center my-4 py-2 px-4 border rounded-xl'>
          <p>Some more info about</p>
          <p>&rarr; {currentLetter} &larr;</p>
        </div>
      )}
    </div>
  );
}
