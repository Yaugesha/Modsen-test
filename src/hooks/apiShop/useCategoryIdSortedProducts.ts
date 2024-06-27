import { useLazyGetCategoryIdSortedProductsQuery } from '@services/shopApi';
import { useEffect } from 'react';

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
