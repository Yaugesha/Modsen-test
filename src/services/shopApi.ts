import { SHOP_API_URL } from '@constants/apiConstants';
import type { Product } from '@customTypes/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
      query: id => `products/${id}`,
    }),
    getIdSortedProducts: builder.query<Product[], string>({
      query: sort => ({
        url: `products`,
        params: { sort },
      }),
    }),
    getCategories: builder.query<string[], string>({
      query: path => path,
    }),
    getCategoryIdSortedProducts: builder.query<
      Product[],
      { category: string; sort: string | undefined }
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
  useGetCategoriesQuery,
  useGetIdSortedProductsQuery,
  useGetCategoryIdSortedProductsQuery,

  useLazyGetIdSortedProductsQuery,
  useLazyGetCategoryIdSortedProductsQuery,
} = shopApi;
