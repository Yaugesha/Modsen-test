import AppLayout from '@components/AppLayout/index';
import {
  AUTHORIZATIO_ROUTE,
  CART_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from '@constants/routes';
import Authorization from '@pages/Authorization';
import Cart from '@pages/Cart';
import Contact from '@pages/Contact';
import Home from '@pages/Home/index';
import Product from '@pages/Product/index';
import Registration from '@pages/Registartion';
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
        path: HOME_ROUTE,
        element: <Home />,
      },
      {
        path: SHOP_ROUTE,
        element: <Shop />,
      },
      {
        path: PRODUCT_ROUTE,
        children: [
          {
            path: ':id',
            element: <Product />,
          },
        ],
      },
      {
        path: CART_ROUTE,
        element: <Cart />,
      },
      {
        path: AUTHORIZATIO_ROUTE,
        element: <Authorization />,
      },
      {
        path: REGISTRATION_ROUTE,
        element: <Registration />,
      },
      {
        path: CONTACT_ROUTE,
        element: <Contact />,
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
