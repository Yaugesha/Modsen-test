import { useEffect, useRef, useState } from 'react';
import {
  SelectButton,
  SelectContainer,
  SelectOptions,
  Chevron,
  SelectOption,
} from './styled';
import chevron from '@assets/images/icons/chevron.svg';

interface SelectProps {
  options: string[];
  name: string;
}

const Select = ({ options, name }: SelectProps) => {
  const [isOptions, setIsOptions] = useState<boolean>(false);
  const [selectedOption, setOption] = useState<string | null>(null);
  const ref = useRef<HTMLElement>();

  const toggleOptions = () => {
    setIsOptions(!isOptions);
  };

  const selectOption = (option: string) => {
    setOption(option);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
  }, []);

  return (
    <SelectContainer>
      <SelectButton ref={ref} onClick={toggleOptions}>
        <span>{selectedOption || name}</span>
        <Chevron selected={isOptions} src={chevron} alt="down" />
      </SelectButton>
      {isOptions && (
        <SelectOptions>
          {options.map((option: string, idx: number) => (
            <SelectOption
              key={idx}
              className="option"
              onClick={() => selectOption(option)}>
              {option}
            </SelectOption>
          ))}
        </SelectOptions>
      )}
    </SelectContainer>
  );
};

export default Select;
