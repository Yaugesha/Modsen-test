import Input from '@components/Input';
import {
  handleChangeMaxBorder,
  handleChangeMinBorder,
  handleInputMaxValue,
  handleInputMaxValueForLine,
  handleInputMinValue,
  handleInputMinValueForLine,
  handleMouseMove,
  handleMouseUp,
  RangeElements,
} from '@components/Range/handlers';
import { useEffect, useRef, useState } from 'react';

import {
  RangeBorder,
  RangeContainer,
  RangeInfo,
  RangeInput,
  RangeInputLabel,
  RangeLine,
  StyledRange,
} from './styled';

interface RangeProps {
  range: number[];
  minValue: number;
  setMinValue: (newMinValue: number) => void;
  maxValue: number;
  setMaxValue: (newMaxValue: number) => void;
}

const Range = ({
  range,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
}: RangeProps) => {
  const [isDragging, setIsDragging] = useState<{ min: boolean; max: boolean }>({
    min: false,
    max: false,
  });

  const rangeLine = useRef<HTMLDivElement>(null);
  const currentRangeLine = useRef<HTMLDivElement>(null);
  const minValBorder = useRef<HTMLDivElement>(null);
  const maxValBorder = useRef<HTMLDivElement>(null);

  const rangeElements = {
    rangeLine,
    minValBorder,
    maxValBorder,
    currentRangeLine,
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent) =>
      handleMouseMove(
        e,
        isDragging,
        range[1],
        rangeElements as RangeElements,
        setMinValue,
        setMaxValue,
      );

    const handleUp = () => handleMouseUp(setIsDragging);

    if (isDragging.min || isDragging.max) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    };
  }, [isDragging, range]);

  const minValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputMinValue(e, setMinValue, setMaxValue, maxValue);
    handleInputMinValueForLine(
      range[1],
      rangeElements as RangeElements,
      Number(e.target.value),
      maxValue,
    );
  };

  const maxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputMaxValue(e, setMinValue, setMaxValue, minValue);
    handleInputMaxValueForLine(
      range[1],
      rangeElements as RangeElements,
      Number(e.target.value),
      minValue,
    );
  };

  return (
    <RangeContainer>
      <RangeLine ref={rangeLine}>
        <StyledRange ref={currentRangeLine} />
        <RangeBorder
          ref={minValBorder}
          position="left"
          onMouseDown={() => handleChangeMinBorder(isDragging, setIsDragging)}
        />
        <RangeBorder
          ref={maxValBorder}
          position="right"
          onMouseDown={() => handleChangeMaxBorder(isDragging, setIsDragging)}
        />
      </RangeLine>

      <RangeInfo>
        <RangeInput>
          <RangeInputLabel htmlFor="from">From</RangeInputLabel>
          <Input
            id="from"
            type="number"
            value={minValue}
            inputHandler={minValueHandler}
          />
        </RangeInput>
        <RangeInput>
          <RangeInputLabel htmlFor="to">To</RangeInputLabel>
          <Input
            id="to"
            type="number"
            value={maxValue}
            inputHandler={maxValueHandler}
          />
        </RangeInput>
      </RangeInfo>
    </RangeContainer>
  );
};

export default Range;
