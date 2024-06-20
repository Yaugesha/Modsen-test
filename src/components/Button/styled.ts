import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.secondary};
  text-transform: uppercase;

  border: 1px solid ${props => props.theme.secondary};
  border-radius: 4px;

  width: 288px;
  height: 32px;

  transition: all 0.4s;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.main};
  }
`;

export { StyledButton };
