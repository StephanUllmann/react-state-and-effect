import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <main className='flex flex-col items-center min-h-svh bg-teal-900 text-slate-200'>
      <nav className='font-semibold flex gap-7 my-5'>
        <NavLink className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')} to='/'>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')} to='/simple'>
          Simple State
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')} to='/multiple'>
          Multiple States
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')} to='/private'>
          State is private and isolated
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')} to='/queueing'>
          Queueing State Updates
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')} to='/objects'>
          Updating State Objects
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')} to='/forms'>
          Updating Forms
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')} to='/effect'>
          useEffect
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')} to='/fetching'>
          Fetching In Effects
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')} to='/linter'>
          Surpressed Linter Issues
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')} to='/custom-hooks'>
          Custom Hooks
        </NavLink>
      </nav>
      <Outlet />
    </main>
  );
}

export default App;
