import { Product } from '@customTypes/product';
import { createReducer } from '@reduxjs/toolkit';
import {
  addProduct,
  addProductAction,
  changeProductCount,
  changeProductCountAction,
} from '@store/actions/cart';

import { RootState } from '../index';

export interface cartProduct {
  product: Product;
  count: number;
}

export interface CartState {
  products: cartProduct[] | [];
}

const initialState: CartState = {
  products: [],
};

const cartReducer = createReducer(initialState, builder => {
  builder
    .addCase(addProduct, addProductAction)
    .addCase(changeProductCount, changeProductCountAction);
});

export const selectCart = (state: RootState) => state.cart.products;

export default cartReducer;
