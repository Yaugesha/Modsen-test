import styled from 'styled-components';

const StyledButton = styled.button<{ buttonSize: 'l' | 'm' | 's' }>`
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.secondary};
  text-transform: uppercase;

  border: ${props => props.theme.borders[1] + props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderR.xs};

  width: ${props => props.theme.buttons[props.buttonSize].width};
  height: ${props => props.theme.buttons[props.buttonSize].height};

  transition: all ${props => props.theme.transition.ms400};
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.main};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.lightGrey};
    color: ${props => props.theme.colors.darkGrey};

    border-color: ${props => props.theme.colors.darkGrey};
    cursor: default;
  }
`;

export { StyledButton };
