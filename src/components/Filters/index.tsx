import search from '@assets/images/icons/search.svg';
import Stack from '@components/Containers/Stack';
import Input from '@components/Input/index';
import Range from '@components/Range';
import Select from '@components/Select/index';
import { useAllCategoties } from '@utils/hooks/apiShopHooks';

import { StyledFilters } from './styled';
import { FiltersProps } from './types';

const Filters = ({
  handleInputSearch,
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

  const categories = useAllCategoties();

  return (
    <StyledFilters>
      <Input
        type="text"
        placeholder="Search"
        buttonImage={search}
        inputHandler={handleInputSearch}
      />
      <Stack gap={16}>
        <Select
          name="Sort by"
          options={['ascending', 'descending']}
          handleSelect={handleSortBy}
        />
        <Select
          name="Shop by"
          options={categories.data!}
          handleSelect={handleShopBy}
        />
      </Stack>
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
