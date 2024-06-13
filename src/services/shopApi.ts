import { SHOP_API_URL } from '@constants/apiConstants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '@utils/types';

export const shopApi = createApi({
  reducerPath: 'shopPath',
  baseQuery: fetchBaseQuery({ baseUrl: SHOP_API_URL }),
  endpoints: builder => ({
    getProducts: builder.query<Product[], number>({
      query: limit => `/?limit=${limit}`,
    }),
    getProduct: builder.query<Product, number>({
      query: id => `/?${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = shopApi;
