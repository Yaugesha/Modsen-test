import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const FormField = styled.div`
  margin-bottom: ${props => props.theme.margins.s};
  width: 100%;
`;

const FormLabel = styled.label`
  ${props => props.theme.typography.h5}
  margin-bottom: ${props => props.theme.margins.xs};
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  ${props => props.theme.typography.s}

  margin-top: ${props => props.theme.margins.xs};
`;

export { ErrorMessage, FormField, FormLabel, StyledForm };
