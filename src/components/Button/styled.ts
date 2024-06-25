import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.secondary};
  text-transform: uppercase;

  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderR.xs};

  width: 288px;
  height: 32px;

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
