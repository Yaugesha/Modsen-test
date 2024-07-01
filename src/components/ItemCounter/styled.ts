import styled from 'styled-components';

const COUNTER_BUTTON_SIZE = '32px';

const CounterButton = styled.button`
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;

  border: ${props => props.theme.borders[1] + props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderR.xs};

  width: ${COUNTER_BUTTON_SIZE};
  height: ${COUNTER_BUTTON_SIZE};

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
