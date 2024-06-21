import { useEffect, useRef, useState } from 'react';
import {
  RangeContainer,
  StyledRange,
  RangeLine,
  RangeBorder,
  RangeInfo,
  RangeInput,
  RangeInputLabel,
} from './styled';
import Input from '@components/Input';
import {
  handleInputMinValue,
  handleInputMaxValue,
  handleMouseMove,
  handleMouseUp,
  handleChangeMinBorder,
  handleChangeMaxBorder,
  handleInputMaxValueForLine,
  handleInputMinValueForLine,
  RangeElements,
} from '@components/Range/handlers';

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
            inputHandler={e => {
              handleInputMinValue(e, setMinValue, setMaxValue, maxValue);
              handleInputMinValueForLine(
                range[1],
                rangeElements as RangeElements,
                minValue,
                maxValue,
              );
            }}
          />
        </RangeInput>
        <RangeInput>
          <RangeInputLabel htmlFor="to">To</RangeInputLabel>
          <Input
            id="to"
            type="number"
            value={maxValue}
            inputHandler={e => {
              handleInputMaxValue(e, setMinValue, setMaxValue, minValue);
              handleInputMaxValueForLine(
                range[1],
                rangeElements as RangeElements,
                maxValue,
                minValue,
              );
            }}
          />
        </RangeInput>
      </RangeInfo>
    </RangeContainer>
  );
};

export default Range;
