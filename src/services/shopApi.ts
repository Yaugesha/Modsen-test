import { SHOP_API_URL } from '@constants/apiConstants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '@utils/types';

export const shopApi = createApi({
  reducerPath: 'shopPath',
  baseQuery: fetchBaseQuery({ baseUrl: SHOP_API_URL }),
  endpoints: builder => ({
    getAllProducts: builder.query<Product[], string>({
      query: path => path,
    }),
    getProducts: builder.query<Product[], number>({
      query: limit => ({
        url: `products`,
        params: { limit },
      }),
    }),
    getProduct: builder.query<Product, number>({
      query: id => `products/?${id}`,
    }),
    getPriceSortedProducts: builder.query<Product[], string>({
      query: sort => ({
        url: `products`,
        params: { sort },
      }),
    }),
    getCategorySortedProducts: builder.query<Product[], string>({
      query: category => `products/category/${category}`,
    }),
    getPriceAndCategorySortedProducts: builder.query<
      Product[],
      { category: string; sort: string }
    >({
      query: ({ category, sort }) => ({
        url: `products/category/${category}`,
        params: { sort },
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductsQuery,
  useGetProductQuery,
  useGetPriceSortedProductsQuery,
  useGetCategorySortedProductsQuery,
  useLazyGetPriceSortedProductsQuery,
  useLazyGetCategorySortedProductsQuery,
} = shopApi;
