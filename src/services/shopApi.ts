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
      query: limit => `products/?limit=${limit}`,
    }),
    getProduct: builder.query<Product, number>({
      query: id => `products/?${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductsQuery,
  useGetProductQuery,
} = shopApi;
