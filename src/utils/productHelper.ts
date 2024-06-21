import { Slide } from 'src/types/Slider';
import { Product } from '../types/Product';

const fullCost = (price: number) => price.toFixed(2);

const getProductId = (url: string) => {
  return Number(url.split('/').at(-1));
};

const createSlides = (item: Product, size: number): Slide[] => {
  const arr: Slide[] = [];
  for (let i = 1; i <= size; i++) {
    arr.push({ image: item.image, title: item.title + i, id: i });
  }
  return arr;
};

export { fullCost, getProductId, createSlides };
