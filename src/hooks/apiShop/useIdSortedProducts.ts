import { useLazyGetIdSortedProductsQuery } from '@services/shopApi';
import { useEffect } from 'react';

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
