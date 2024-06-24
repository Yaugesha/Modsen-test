import {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useLazyGetCategoryIdSortedProductsQuery,
  useLazyGetIdSortedProductsQuery,
} from '@services/shopApi';
import { useEffect } from 'react';

export const useAllProducts = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery('products\\');
  return { data, isLoading, isError };
};
export const useAllCategoties = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery(
    'products\\categories',
  );
  return { data, isLoading, isError };
};

export const useIdSortedProducts = (sortBy: string) => {
  const [trigger, { data, isLoading, isError }] =
    useLazyGetIdSortedProductsQuery();

  useEffect(() => {
    if (sortBy) {
      trigger(sortBy);
    }
  }, [sortBy, trigger]);

  return { data, isLoading, isError };
};

export const useCategoryIdSortedProducts = (
  shopBy: string,
  sortBy?: string,
) => {
  const [trigger, { data, isLoading, isError }] =
    useLazyGetCategoryIdSortedProductsQuery();

  useEffect(() => {
    if (shopBy && sortBy) {
      trigger({ category: shopBy, sort: sortBy });
    }
  }, [shopBy, sortBy, trigger]);

  return { data, isLoading, isError };
};
