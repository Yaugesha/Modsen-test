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
} from '@utils/rangeInputHandlers';

interface RangeProps {
  range: number[];
}

const Range = ({ range }: RangeProps) => {
  const [minValue, setMinValue] = useState<number>(range[0]);
  const [maxValue, setMaxValue] = useState<number>(range[1]);
  const [isDragging, setIsDragging] = useState<{ min: boolean; max: boolean }>({
    min: false,
    max: false,
  });

  const rangeLine = useRef<HTMLDivElement>(null);
  const currentRangeLine = useRef<HTMLDivElement>(null);
  const minValBorder = useRef<HTMLDivElement>(null);
  const maxValBorder = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) =>
      handleMouseMove(
        e,
        isDragging,
        range[1],
        rangeLine,
        currentRangeLine,
        minValBorder,
        maxValBorder,
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
            inputHandler={e =>
              handleInputMinValue(e, setMinValue, setMaxValue, maxValue)
            }
          />
        </RangeInput>
        <RangeInput>
          <RangeInputLabel htmlFor="to">To</RangeInputLabel>
          <Input
            id="to"
            type="number"
            value={maxValue}
            inputHandler={e =>
              handleInputMaxValue(e, setMinValue, setMaxValue, minValue)
            }
          />
        </RangeInput>
      </RangeInfo>
    </RangeContainer>
  );
};

export default Range;
