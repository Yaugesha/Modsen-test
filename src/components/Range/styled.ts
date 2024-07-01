import styled from 'styled-components';

const RANGE_CONTAINER_HEIGHT = '64px';
const RANGE_HEIGHT = '2px';

const RANGE_LINE_TOP = '4px';

const RANGE_BORDER_TOP = '-4px';
const RANGE_BORDER_WIDTH = '2px';
const RANGE_BORDER_HEIGHT = '10px';

const RangeContainer = styled.div`
  position: relative;
  height: ${RANGE_CONTAINER_HEIGHT};
`;

const StyledRange = styled.div`
  position: absolute;

  background-color: ${props => props.theme.colors.secondary};

  width: 100%;
  height: ${RANGE_HEIGHT};
`;

const RangeLine = styled.div`
  position: relative;
  top: ${RANGE_LINE_TOP};

  background-color: ${props => props.theme.colors.grey};

  width: 100%;
  height: ${RANGE_HEIGHT};
`;

const RangeBorder = styled.div<{ position: string }>`
  position: absolute;
  top: ${RANGE_BORDER_TOP};
  left: ${props => (props.position == 'left' ? '0%' : '100%')};

  background-color: ${props => props.theme.colors.secondary};

  width: ${RANGE_BORDER_WIDTH};
  height: ${RANGE_BORDER_HEIGHT};

  cursor: grab;
`;

const RangeInfo = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  margin-top: ${props => props.theme.margins.s};
`;

const RangeInput = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const RangeInputLabel = styled.div`
  ${props => props.theme.typography.h5}
  padding-bottom: ${props => props.theme.paddings.xs};
`;

export {
  RangeBorder,
  RangeContainer,
  RangeInfo,
  RangeInput,
  RangeInputLabel,
  RangeLine,
  StyledRange,
};
