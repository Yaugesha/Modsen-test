import { configureStore } from '@reduxjs/toolkit';
import { shopApi } from '@services/shopApi';

import cartReducer from './reducers/cart';

export const store = configureStore({
  reducer: {
    [shopApi.reducerPath]: shopApi.reducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
