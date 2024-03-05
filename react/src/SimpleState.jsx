import { useState } from 'react';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
export default function SimpleState() {
  // Won't work, because no re-render triggered and variables initialized on each render
  // let index = 0;
  // let currentLetter = alphabet[index];

  // const nextLetter = () => {
  //   index++;
  // };

  // the right way
  const [index, setIndex] = useState(0);
  let currentLetter = alphabet[index];

  const nextLetter = () => {
    // setIndex(index + 1);

    if (index < alphabet.length - 1) setIndex((i) => i + 1);
    else setIndex(0);
  };

  return (
    <>
      <h1 className='text-2xl mb-7'>Simple State</h1>
      <p>{currentLetter}</p>
      <button className='my-5 py-2 px-4 border rounded' type='button' onClick={nextLetter}>
        Next Letter &rarr;
      </button>
    </>
  );
}
