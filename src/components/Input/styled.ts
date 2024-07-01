import styled from 'styled-components';

const INPUT_BUTTON_TOP = '7px';
const INPUT_BUTTON_RIGHT = '12px';

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  ${props => props.theme.typography.h5}
  color: ${props => props.theme.colors.secondary};

  width: 100%;
`;

const InputButton = styled.img`
  position: absolute;
  right: ${INPUT_BUTTON_RIGHT};
  top: ${INPUT_BUTTON_TOP};

  cursor: pointer;
`;

export { InputButton, InputWrapper, StyledInput };
