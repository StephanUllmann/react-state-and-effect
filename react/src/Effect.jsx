import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const getRandomColor = () => {
  const l = '82% ';
  const c = Math.random().toFixed(2) + ' ';
  const h = (Math.random() * 360).toFixed(2);
  // console.log('oklch(' + l + c + h + ')');
  return 'oklch(' + l + c + h + ')';
};

export default function Effect() {
  const randomColor = useRef('#fff');
  const [someState, setSomeState] = useState(0);
  const [someColor, setSomeColor] = useState('#fff');
  const [syncedColor, setSyncedColor] = useState(() => getRandomColor());

  const numRenders = useRef(0);
  const numCalls = useRef(0);
  numCalls.current += 1;
  useEffect(() => {
    numRenders.current += 1;
  });

  useEffect(() => {
    console.log('Mount has finished');

    return () => console.log('Component unmounted');
  }, []);

  useEffect(() => {
    console.log('Render has finished');
  });

  console.log(`Function called - :rocket: numCalls: ${numCalls.current} | numRenders: ${numRenders.current}`);

  // useEffect without dependency Array
  // useEffect(() => {
  // randomColor.current = getRandomColor();
  // document.title = randomColor.current;
  // });
  randomColor.current = getRandomColor();
  document.title = randomColor.current;

  // useEffect(() => {
  //   setSomeColor(getRandomColor());
  // }, []);

  // useEffect(() => {
  //   setSyncedColor(getRandomColor());
  // }, [someState]);

  return (
    <div>
      <h1 className='text-2xl mb-7'>useEffect - Dependency Arrays</h1>
      <div className='flex gap-2 children:border children:py-2 children:px-4'>
        {/* Won't have the current color, but the previous one when using effect*/}
        <p style={{ color: randomColor.current }}>
          This color is set
          <br />
          without dependency array
        </p>
        <p style={{ color: someColor }}>
          This color is set
          <br />
          inside useEffect with empty d arr
        </p>
        <p style={{ color: syncedColor }}>
          This color is set
          <br />
          inside useEffect with someState in d arr
        </p>
      </div>
      {/* <button
        className='my-5 mx-2 py-2 px-4 border border-green-600 rounded'
        type='button'
        onClick={() => {
          setSomeState((p) => p + 1);
        }}
      >
        re-render
      </button> */}
      <button
        className='my-5 mx-2 py-2 px-4 border border-green-500 rounded'
        type='button'
        onClick={() => {
          setSomeState((p) => p + 1);
          setSyncedColor(getRandomColor());
        }}
      >
        re-render
      </button>
    </div>
  );
}
