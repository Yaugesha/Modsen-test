import AppLayout from '@components/AppLayout/index';
import Cart from '@pages/Cart';
import Home from '@pages/Home/index';
import Product from '@pages/Product/index';
import Shop from '@pages/Shop/index';
import { store } from '@store/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
      {
        path: '/cart',
        element: <Cart />,
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
