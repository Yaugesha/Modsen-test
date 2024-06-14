import { Product } from '@utils/types';
import {
  SliderWrapper,
  Image,
  ImageWrapper,
  SliderContent,
  SliderPagination,
  PaginationItem,
} from './styled';
import { useState } from 'react';

interface Products {
  products: Product[];
}

const Slider = ({ products }: Products) => {
  const [currentItem, setCurrentItem] = useState<Product>(products[0]);

  const toggleSlider = (product: Product) => {
    setCurrentItem(product);
  };

  return (
    <SliderWrapper>
      <SliderContent>
        {products.map((product: Product) => (
          <ImageWrapper key={product.id}>
            <Image src={product.image} alt={product.title} />
          </ImageWrapper>
        ))}
      </SliderContent>
      <SliderPagination>
        {products.map((product: Product) => (
          <PaginationItem
            key={product.id}
            onClick={() => toggleSlider(product)}
            isactive={currentItem.id === product.id}
          />
        ))}
      </SliderPagination>
    </SliderWrapper>
  );
};

export default Slider;
