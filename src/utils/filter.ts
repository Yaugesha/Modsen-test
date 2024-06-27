import { Product } from '../types/product';

const findCategories = (products: Product[]): string[] => {
  return Array.from(new Set(products.map(product => product.category)));
};

const findPricesrange = (products: Product[]): number[] => {
  const productsPrices = products.map(prod => prod.price);
  return [Math.min(...productsPrices), Math.max(...productsPrices)];
};

export { findCategories, findPricesrange };
