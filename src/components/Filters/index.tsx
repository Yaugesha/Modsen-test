import Input from '@components/Input/index';
import Select from '@components/Select/index';
import search from '@assets/images/icons/search.svg';
import Range from '@components/Range';
import { ChangeEventHandler } from 'react';
import { StyledFilters, Sorts } from './styled';

interface FiltersProps {
  handleInputSearch: ChangeEventHandler<HTMLInputElement>;
}

const Filters = ({ handleInputSearch }: FiltersProps) => {
  return (
    <StyledFilters>
      <Input
        type="text"
        placeholder="Search"
        buttonImage={search}
        inputHandler={handleInputSearch}
      />
      <Sorts>
        <Select name="Sort by" options={['a', 'd']} />
        <Select name="Shop by" options={['a', 'd']} />
      </Sorts>
      <Range range={[1, 999]} />
    </StyledFilters>
  );
};

export default Filters;
