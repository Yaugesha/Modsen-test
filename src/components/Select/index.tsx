import chevron from '@assets/images/icons/chevron.svg';
import { useClickOutside } from '@hooks/useClickOutside';
import { useRef, useState } from 'react';

import {
  Chevron,
  SelectButton,
  SelectContainer,
  SelectOption,
  SelectOptions,
} from './styled';

interface SelectProps {
  options: string[];
  handleSelect: (value: string) => void;
  name: string;
}

const Select = ({ options, name, handleSelect }: SelectProps) => {
  const [isOptions, setIsOptions] = useState<boolean>(false);
  const [selectedOption, setOption] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOptions = () => {
    setIsOptions(!isOptions);
  };

  const selectOption = (option: string) => {
    handleSelect(option);
    setOption(option);
    setIsOptions(false);
  };

  useClickOutside(ref, () => {
    if (isOptions) setIsOptions(false);
  });

  return (
    <SelectContainer ref={ref}>
      <SelectButton onClick={toggleOptions}>
        <span>{selectedOption || name}</span>
        <Chevron selected={isOptions} src={chevron} alt="down" />
      </SelectButton>
      {isOptions && (
        <SelectOptions>
          {options.map((option: string, idx: number) => {
            const bindedSelectOption = selectOption.bind(null, option);
            return (
              <SelectOption key={idx} onClick={bindedSelectOption}>
                {option}
              </SelectOption>
            );
          })}
        </SelectOptions>
      )}
    </SelectContainer>
  );
};

export default Select;
