import styled from 'styled-components';

const RangeContainer = styled.div`
  position: relative;
  height: 64px;
`;

const StyledRange = styled.div`
  position: absolute;

  background-color: ${props => props.theme.secondary};

  width: 100%;
  height: 2px;
`;

const RangeLine = styled.div`
  position: relative;
  top: 4px;

  background-color: ${props => props.theme.grey};

  width: 100%;
  height: 2px;
`;

const RangeBorder = styled.div<{ position: string }>`
  position: absolute;
  top: -4px;
  left: ${props => (props.position == 'left' ? '0%' : '100%')};

  background-color: ${props => props.theme.secondary};

  width: 2px;
  height: 10px;

  cursor: grab;
`;

const RangeInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  margin-top: 16px;
`;

const RangeInput = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const RangeInputLabel = styled.div`
  ${props => props.theme.typography.h5}
  padding-bottom: 6px;
`;

export {
  RangeContainer,
  StyledRange,
  RangeLine,
  RangeBorder,
  RangeInfo,
  RangeInput,
  RangeInputLabel,
};
