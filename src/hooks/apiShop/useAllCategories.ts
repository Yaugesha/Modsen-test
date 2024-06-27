import { useGetCategoriesQuery } from '@services/shopApi';

export const useAllCategoties = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery(
    'products\\categories',
  );
  return { data, isLoading, isError };
};
