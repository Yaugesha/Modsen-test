import { configureStore } from '@reduxjs/toolkit';
import { shopApi } from '@services/shopApi';

import cartReducer from './reducers/cart';
import themeReducer from './reducers/theme';

export const store = configureStore({
  reducer: {
    [shopApi.reducerPath]: shopApi.reducer,
    cart: cartReducer,
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
