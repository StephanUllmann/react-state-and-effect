import { useState } from 'react';
export default function UpdatingStateObjects() {
  // Primitives are per se immutable in JS - but objects not - they are mutable

  const [location, setLocation] = useState({ latitude: 53.14486, longitude: 13.18332 });

  const [positionRed, setPositionRed] = useState({
    x: 25,
    y: 42,
  });
  const [positionGreen, setPositionGreen] = useState({
    x: 0,
    y: 0,
  });

  // mutating an object in react messes things up - Instead of mutating them, you should always replace them.
  location.latitude = 42; // don't!

  return (
    <>
      <h1 className='text-2xl mb-7'>Updating State Objects</h1>
      <p>
        Geolocation: {location.latitude} | {location.longitude}
      </p>
      <p>
        Green Location: {positionGreen.x}, {positionGreen.y}
      </p>
      <button className='my-5 py-2 px-4 border rounded' type='button'>
        Next Letter &rarr;
      </button>
      {/* doesn't work */}
      <div
        onPointerMove={(e) => {
          positionRed.x = e.clientX;
          positionRed.y = e.clientY;
        }}
        className='absolute inset-0 pointer-events-none'
      >
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${positionRed.x}px, ${positionRed.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        />
      </div>
      {/* works */}
      <div
        onClick={(e) => {
          // hide the top layer, get element underneath, chlick that and re-enable top-layer 🤦‍♂️
          e.stopPropagation();
          let topElement = document.elementFromPoint(e.clientX, e.clientY);
          topElement.style.display = 'none';
          const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
          console.log(elementBelow);
          // Create a new click event
          const clickEvent = new MouseEvent('click', {
            bubbles: false,
            cancelable: true,
            view: window,
          });

          // Dispatch the click event on the element below
          elementBelow.dispatchEvent(clickEvent);
          topElement.style.display = '';
        }}
        onMouseMove={(e) => {
          // console.log(e);
          setPositionGreen({
            x: e.clientX,
            y: e.clientY,
          });
        }}
        className='absolute inset-0 '
      >
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'green',
            borderRadius: '50%',
            transform: `translate(${positionGreen.x}px, ${positionGreen.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
            pointerEvents: 'none',
            zIndex: 10,
            isolation: 'isolate',
          }}
        />
      </div>
    </>
  );
}
