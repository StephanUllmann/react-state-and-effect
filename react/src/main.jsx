import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import SimpleState from './SimpleState.jsx';
import MultipleStates from './MultipleStates.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StatesArePrivate from './StatesArePrivate.jsx';
import QueueingStateUpdates from './QueueingStateUpdates.jsx';
import UpdatingStateObjects from './UpdatingStateObjects.jsx';
import UpdatingForm from './UpdatingForm.jsx';
import Effect from './Effect.jsx';
import FetchingInEffect from './FetchingInEffect.jsx';
import DependencyLying from './DependencyLying.jsx';
import CustomHooks from './CustomHooks.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/simple',
        element: <SimpleState />,
      },
      { path: '/multiple', element: <MultipleStates /> },
      { path: '/private', element: <StatesArePrivate /> },
      { path: '/queueing', element: <QueueingStateUpdates /> },
      { path: '/objects', element: <UpdatingStateObjects /> },
      { path: '/forms', element: <UpdatingForm /> },
      { path: '/effect', element: <Effect /> },
      { path: '/fetching', element: <FetchingInEffect /> },
      { path: '/linter', element: <DependencyLying /> },
      { path: '/custom-hooks', element: <CustomHooks /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
