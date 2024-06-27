import { useGetAllProductsQuery } from '@services/shopApi';

export const useAllProducts = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery('products\\');
  return { data, isLoading, isError };
};
