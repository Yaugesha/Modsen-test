import chevron from '@assets/images/icons/chevron.svg';
import { useRef, useState } from 'react';
import { useClickOutside } from 'src/hooks/useClickOutside';

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
          {options.map((option: string, idx: number) => (
            <SelectOption key={idx} onClick={() => selectOption(option)}>
              {option}
            </SelectOption>
          ))}
        </SelectOptions>
      )}
    </SelectContainer>
  );
};

export default Select;
