import Input from '@components/Input/index';
import Select from '@components/Select/index';
import search from '@assets/images/icons/search.svg';
import Range from '@components/Range';
import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import { StyledFilters, Sorts } from './styled';
import { Product } from '@utils/types';
import { findCategories } from '@utils/filter';

interface FiltersProps {
  handleInputSearch: ChangeEventHandler<HTMLInputElement>;
  products: Product[];
  priceRange: number[];
  setSortBy: Dispatch<SetStateAction<string>>;
  setShopBy: Dispatch<SetStateAction<string>>;
  minValue: number;
  setMinValue: Dispatch<SetStateAction<number>>;
  maxValue: number;
  setMaxValue: Dispatch<SetStateAction<number>>;
}

const Filters = ({
  handleInputSearch,
  products,
  priceRange,
  setSortBy,
  setShopBy,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
}: FiltersProps) => {
  const handleSortBy = (value: string) => {
    setSortBy(value == 'ascending' ? 'asc' : 'desc');
  };
  const handleShopBy = (value: string) => {
    setShopBy(value);
  };

  return (
    <StyledFilters>
      <Input
        type="text"
        placeholder="Search"
        buttonImage={search}
        inputHandler={handleInputSearch}
      />
      <Sorts>
        <Select
          name="Sort by"
          options={['ascending', 'descending']}
          handleSelect={handleSortBy}
        />
        <Select
          name="Shop by"
          options={findCategories(products)}
          handleSelect={handleShopBy}
        />
      </Sorts>
      <Range
        minValue={minValue}
        maxValue={maxValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        range={priceRange}
      />
    </StyledFilters>
  );
};

export default Filters;
