import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;

  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  ${props => props.theme.typography.h5}
  color: ${props => props.theme.colors.secondary};

  padding: 0px 0px 6px;
  width: 100%;
`;

const InputButton = styled.img`
  position: absolute;
  right: 12px;
  top: 7px;

  cursor: pointer;
`;

export { StyledInput, InputWrapper, InputButton };
