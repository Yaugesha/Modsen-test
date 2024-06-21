import { ChangeEventHandler } from 'react';

export interface FiltersProps {
  handleInputSearch: ChangeEventHandler<HTMLInputElement>;
  priceRange: number[];
  setSortBy: (newValue: string) => void;
  setShopBy: (newValue: string) => void;
  minValue: number;
  setMinValue: (newMinValue: number) => void;
  maxValue: number;
  setMaxValue: (newMaxValue: number) => void;
}
