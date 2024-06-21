import { PayloadAction, createAction } from '@reduxjs/toolkit';
import { CartState, cartProduct } from '@store/reducers/cart';
import { Product } from 'src/types/types';

const getProduct = (cartProducts: cartProduct[], id: number): cartProduct => {
  return cartProducts.find(cartProduct => cartProduct.product.id === id)!;
};

const addProduct = createAction<Product>('cart/addProduct');
const changeProductCount = createAction<{
  productId: number;
  count: number;
}>('cart/changeProductCount');

const addProductAction = (state: CartState, action: PayloadAction<Product>) => {
  const newProduct: cartProduct = { product: action.payload, count: 1 };
  return {
    ...state,
    products: [...state.products, newProduct],
  };
};

const changeProductCountAction = (
  state: CartState,
  action: PayloadAction<{ productId: number; count: number }>,
) => {
  const item = getProduct(state.products, action.payload.productId);
  if (item) {
    item.count = action.payload.count;
  }
};

export {
  addProduct,
  changeProductCount,
  addProductAction,
  changeProductCountAction,
};
