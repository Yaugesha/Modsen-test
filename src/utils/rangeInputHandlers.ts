import { RefObject } from 'react';

interface DraggingState {
  min: boolean;
  max: boolean;
}

interface RangeElements {
  rangeLine: RefObject<HTMLDivElement>;
  minValBorder: RefObject<HTMLDivElement>;
  maxValBorder: RefObject<HTMLDivElement>;
  currentRangeLine: RefObject<HTMLDivElement>;
}

const countRangeBorderValue = (
  length: number,
  maxRangeValue: number,
  rangeLineWidth: number,
): number => {
  return Number(((maxRangeValue * length) / rangeLineWidth).toFixed(2));
};

const countRangelength = (
  length: number,
  rangeValue: number,
  maxRangeValue: number,
): number => {
  return (length * rangeValue) / maxRangeValue;
};

const countRangeBorder = (
  length: number,
  maxRangeValue: number,
  rangeValue: number,
): number => {
  return (length * rangeValue) / maxRangeValue;
};

const handleInputMinValueForLine = (
  maxRangeValue: number,
  rangeElements: RangeElements,
  newMinvalue: number,
  maxValue: number,
) => {
  const { rangeLine, minValBorder, currentRangeLine } = { ...rangeElements };
  const newBorder = countRangeBorder(
    rangeLine.current!.offsetWidth,
    maxRangeValue,
    newMinvalue,
  );
  currentRangeLine.current!.style.left = `${newBorder}px`;
  minValBorder.current!.style.left = `${newBorder}px`;
  currentRangeLine.current!.style.width = `${countRangelength(rangeLine.current!.offsetWidth, maxValue - newMinvalue, maxRangeValue)}px`;
};

const handleInputMaxValueForLine = (
  maxRangeValue: number,
  rangeElements: RangeElements,
  newMaxvalue: number,
  minValue: number,
) => {
  const { rangeLine, maxValBorder, currentRangeLine } = { ...rangeElements };
  const newBorder = countRangeBorder(
    rangeLine.current!.offsetWidth,
    maxRangeValue,
    newMaxvalue,
  );
  currentRangeLine.current!.style.width = `${countRangelength(rangeLine.current!.offsetWidth, newMaxvalue - minValue, maxRangeValue)}px`;
  currentRangeLine.current!.style.right = `${currentRangeLine.current!.offsetWidth - newBorder}px`;
  maxValBorder.current!.style.left = `${newBorder}px`;
};

const handleInputMinValue = (
  e: React.ChangeEvent<HTMLInputElement>,
  setMinValue: (value: number) => void,
  setMaxValue: (value: number) => void,
  maxValue: number,
) => {
  const value = Number(e.target.value);

  if (value > maxValue) {
    setMinValue(maxValue);
    setMaxValue(value);
  } else {
    setMinValue(value);
  }
};

const handleInputMaxValue = (
  e: React.ChangeEvent<HTMLInputElement>,
  setMinValue: (value: number) => void,
  setMaxValue: (value: number) => void,
  minValue: number,
) => {
  const value = Number(e.target.value);
  if (value < minValue) {
    setMaxValue(minValue);
    setMinValue(value);
  } else {
    setMaxValue(value);
  }
};

const handleMouseMove = (
  e: MouseEvent,
  isDragging: DraggingState,
  maxRangeValue: number,
  rangeElements: RangeElements,
  setMinValue: (value: number) => void,
  setMaxValue: (value: number) => void,
) => {
  const { rangeLine, maxValBorder, minValBorder, currentRangeLine } = {
    ...rangeElements,
  };
  const rangeLineX = rangeLine.current!.getBoundingClientRect().x;
  const rangeLineWidth = rangeLine.current!.offsetWidth;
  const length = e.clientX - rangeLineX;

  const currentRangeLineX = currentRangeLine.current!.getBoundingClientRect().x;
  const currentRangeLineWidth = currentRangeLine.current!.offsetWidth;

  if (isDragging.min) {
    minValBorder.current!.style.left = `${length}px`;
    currentRangeLine.current!.style.left = `${length}px`;
    currentRangeLine.current!.style.width = `${currentRangeLineWidth - (e.clientX - currentRangeLineX)}px`;
    setMinValue(countRangeBorderValue(length, maxRangeValue, rangeLineWidth));
  }
  if (isDragging.max) {
    const newWidth =
      Math.min(length, rangeLineWidth) - currentRangeLineX + rangeLineX;
    maxValBorder.current!.style.left = `${length}px`;
    currentRangeLine.current!.style.width = `${newWidth}px`;
    setMaxValue(countRangeBorderValue(length, maxRangeValue, rangeLineWidth));
  }
};

const handleMouseUp = (setIsDragging: (state: DraggingState) => void) => {
  setIsDragging({ min: false, max: false });
};

const handleChangeMinBorder = (
  isDragging: DraggingState,
  setIsDragging: (state: DraggingState) => void,
) => {
  setIsDragging({ ...isDragging, min: true });
};

const handleChangeMaxBorder = (
  isDragging: DraggingState,
  setIsDragging: (state: DraggingState) => void,
) => {
  setIsDragging({ ...isDragging, max: true });
};

export {
  handleInputMinValue,
  handleInputMaxValue,
  handleMouseMove,
  handleMouseUp,
  handleChangeMinBorder,
  handleChangeMaxBorder,
  handleInputMaxValueForLine,
  handleInputMinValueForLine,
  RangeElements,
};
