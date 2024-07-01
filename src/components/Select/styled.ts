import styled, { css } from 'styled-components';

const SELECT_CONTAINER_HEIGHT = '54px';

const SELECT_HEIGHT = '24px';
const SELECT_PADDING = '14px 12px';

const ROTATE_ENGLE = '180deg';

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${SELECT_CONTAINER_HEIGHT};
`;

const SelectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props => props.theme.typography.m}

  border: ${props => props.theme.borders[1] + props.theme.colors.grey};
  border-radius: ${props => props.theme.borderR.xs};

  padding: ${SELECT_PADDING};
  height: ${SELECT_HEIGHT};

  cursor: pointer;
`;

const rotate = css`
  transform: rotate(${ROTATE_ENGLE});
`;

const Chevron = styled.img<{ selected: boolean }>`
  ${props => {
    if (props.selected) return rotate;
  }};
`;

const SelectOptions = styled.ul`
  position: relative;

  background-color: ${props => props.theme.colors.main};

  border: ${props => props.theme.borders[1] + props.theme.colors.grey};
  border-radius: ${props => props.theme.borderR.xs};
  list-style: none;

  width: 100%;
  z-index: 2;
`;

const SelectOption = styled.li`
  ${props => props.theme.typography.m}
  border-radius: ${props => props.theme.borderR.xs};

  padding: ${SELECT_PADDING};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.lightGrey};
    border-radius: ${props => props.theme.borderR.xs};
  }
`;

export { Chevron, SelectButton, SelectContainer, SelectOption, SelectOptions };
