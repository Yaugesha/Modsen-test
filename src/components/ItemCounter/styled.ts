import styled from 'styled-components';

const CounterButton = styled.button`
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;

  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderR.xs};

  width: 32px;
  height: 32px;

  transition: all ${props => props.theme.transition.ms400};
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.main};
  }
`;

const Counter = styled.span`
  ${props => props.theme.typography.h5}
`;

export { Counter, CounterButton };
