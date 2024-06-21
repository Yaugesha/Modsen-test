import { Slide } from 'src/types/types';
import {
  SliderWrapper,
  Image,
  ImageWrapper,
  SliderContent,
  SliderPagination,
  PaginationItemInactive,
  PaginationItemActive,
} from './styled';
import { useEffect, useState } from 'react';

interface SLiderProps {
  items: Slide[];
  width: number;
  height: number;
  gap: number;
}

const Slider = ({ items, width, height, gap }: SLiderProps) => {
  const [currentItem, setCurrentItem] = useState<Slide>(items[0]);

  useEffect(() => {
    const interval = setTimeout(autoScroll, 3000);
    return () => clearInterval(interval);
  }, [currentItem]);

  const toggleSlide = (item: Slide) => {
    const slider = document.querySelector('.slider') as HTMLElement;
    slider.style.left = `-${Math.abs(1 - item.id) * (width + gap)}px`;
    setCurrentItem(item);
  };

  const autoScroll = () => {
    const slider = document.querySelector('.slider') as HTMLElement;
    if (currentItem.id !== items.length) {
      slider.style.left = `-${currentItem.id * (width + gap)}px`;
      setCurrentItem(items[currentItem.id]);
    } else {
      slider.style.left = '0px';
      setCurrentItem(items[0]);
    }
  };

  return (
    <SliderWrapper width={width} height={height}>
      <SliderContent gap={gap} className="slider">
        {items.map((item: Slide) => (
          <ImageWrapper width={width} height={height} key={item.id}>
            <Image src={item.image} alt={item.title} />
          </ImageWrapper>
        ))}
      </SliderContent>
      <SliderPagination>
        {items.map((item: Slide) => {
          return currentItem.id !== item.id ? (
            <PaginationItemInactive
              onClick={() => toggleSlide(item)}
              key={item.id}
            />
          ) : (
            <PaginationItemActive
              onClick={() => toggleSlide(item)}
              key={item.id}
            />
          );
        })}
      </SliderPagination>
    </SliderWrapper>
  );
};

export default Slider;
