import { Product } from '@utils/types';
import {
  SliderWrapper,
  Image,
  ImageWrapper,
  SliderContent,
  SliderPagination,
  PaginationItem,
} from './styled';
import { useEffect, useState } from 'react';

interface Items {
  items: Product[];
}

const Slider = ({ items }: Items) => {
  const [currentItem, setCurrentItem] = useState<Product>(items[0]);

  useEffect(() => {
    const interval = setTimeout(autoScroll, 3000);
    return () => clearInterval(interval);
  }, [currentItem]);

  const toggleSlide = (item: Product) => {
    const slider = document.querySelector('.slider') as HTMLElement;
    slider.style.left = `-${Math.abs(1 - item.id) * 1312}px`;
    setCurrentItem(item);
  };

  const autoScroll = () => {
    const slider = document.querySelector('.slider') as HTMLElement;
    if (currentItem.id !== items.length) {
      slider.style.left = `-${currentItem.id * 1312}px`;
      setCurrentItem(items[currentItem.id]);
    } else {
      slider.style.left = '0px';
      setCurrentItem(items[0]);
    }
  };

  return (
    <SliderWrapper>
      <SliderContent className="slider">
        {items.map((item: Product) => (
          <ImageWrapper key={item.id}>
            <Image src={item.image} alt={item.title} />
          </ImageWrapper>
        ))}
      </SliderContent>
      <SliderPagination>
        {items.map((item: Product) => (
          <PaginationItem
            isActive={currentItem.id === item.id}
            key={item.id}
            onClick={() => toggleSlide(item)}
          />
        ))}
      </SliderPagination>
    </SliderWrapper>
  );
};

export default Slider;
