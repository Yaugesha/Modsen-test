import styled, { css } from 'styled-components';

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 54px;
`;

const SelectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props => props.theme.typography.m}

  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: ${props => props.theme.borderR.xs};

  padding: 14px 12px;
  height: 24px;

  cursor: pointer;
`;

const rotate = css`
  transform: rotate(180deg);
`;

const Chevron = styled.img<{ selected: boolean }>`
  ${props => {
    if (props.selected) return rotate;
  }};
`;

const SelectOptions = styled.ul`
  position: relative;

  background-color: ${props => props.theme.colors.main};
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: ${props => props.theme.borderR.xs};
  list-style: none;

  width: 100%;
  z-index: 2;
`;

const SelectOption = styled.li`
  ${props => props.theme.typography.m}
  border-radius: ${props => props.theme.borderR.xs};

  padding: 14px 12px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.lightGrey};
    border-radius: ${props => props.theme.borderR.xs};
  }
`;

export { Chevron, SelectButton, SelectContainer, SelectOption, SelectOptions };
