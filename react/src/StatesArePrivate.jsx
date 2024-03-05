import Letters from './components/Letters';

export default function StatesArePrivate() {
  // Each instance of Letters has its own state array
  return (
    <>
      <h1 className='text-2xl mb-7'>Each component&apos;s state is private and isolated</h1>

      <div className='flex gap-3'>
        <Letters />
        <Letters />
        <Letters />
      </div>
    </>
  );
}
