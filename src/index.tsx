import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { shopApi } from '@services/shopApi';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '@pages/home';
import AppLayout from '@components/AppLayout/index';

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={shopApi}>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>,
);
