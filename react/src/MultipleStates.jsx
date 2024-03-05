import { useState } from 'react';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
export default function MultipleStates() {
  // You can have as many state variables of as many types as you like in one component.
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let currentLetter = alphabet[index];

  const nextLetter = () => {
    if (index < alphabet.length - 1) setIndex((i) => i + 1);
    else setIndex(0);
  };

  // because state is stored and called in order, you cannot call a hook conditionally
  // const date = new Date();
  // if (date.getDay() === 3) {
  //   const [isWednesday, setIsWednesday] = useState(true);
  // }

  return (
    <>
      <h1 className='text-2xl mb-7'>You can have Multiple States in one Component</h1>
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
    </>
  );
}
