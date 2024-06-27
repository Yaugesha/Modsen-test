import { Product } from '@customTypes/product';
import { useEffect, useState } from 'react';

import { useAllProducts } from './apiShop/useAllProducts';
import { useCategoryIdSortedProducts } from './apiShop/useCategoryIdSortedProducts';
import { useIdSortedProducts } from './apiShop/useIdSortedProducts';

export const useProductSort = (sortBy: string, shopBy: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(1000);
  const [range, setRange] = useState<number[]>([]);

  const allProducts = useAllProducts();
  const idSortedProducts = useIdSortedProducts(sortBy);
  const categorySortedProducts = useCategoryIdSortedProducts(shopBy, sortBy);

  useEffect(() => {
    if (allProducts.data) {
      setProducts(allProducts.data);
      const prices = allProducts.data.map(p => p.price);
      setMinValue(Math.min(...prices));
      setMaxValue(Math.max(...prices));
      setRange([Math.min(...prices), Math.max(...prices)]);
    }
  }, [allProducts.data]);

  useEffect(() => {
    if (idSortedProducts.data) {
      setProducts(idSortedProducts.data);
    }
  }, [idSortedProducts.data]);

  useEffect(() => {
    if (categorySortedProducts.data) {
      setProducts(categorySortedProducts.data);
    }
  }, [categorySortedProducts.data, idSortedProducts.data]);

  const filteredProducts = (): Product[] => {
    return products.filter(
      product => product.price >= minValue && product.price <= maxValue,
    );
  };

  return {
    products: filteredProducts(),
    isLoading:
      allProducts.isLoading ||
      idSortedProducts.isLoading ||
      categorySortedProducts.isLoading,
    isError:
      allProducts.isError ||
      idSortedProducts.isError ||
      categorySortedProducts.isError,
    minValue,
    maxValue,
    setMinValue,
    setMaxValue,
    range,
  };
};
