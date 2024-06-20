import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '@pages/Home/index';
import Shop from '@pages/Shop/index';
import Product from '@pages/Product/index';
import AppLayout from '@components/AppLayout/index';

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/product',
        children: [
          {
            path: ':id',
            element: <Product />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
