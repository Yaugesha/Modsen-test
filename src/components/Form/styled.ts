import styled, { css } from 'styled-components';

const FORM_GRID_COL_GAP = '94px';
const FORM_GRID_ROW_GAP = '119px';

const flexForm = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const gridForm = css`
  display: grid;
  grid-template-areas:
    'a b'
    'c d'
    'e e'
    'f f';
  row-gap: ${FORM_GRID_ROW_GAP};
  column-gap: ${FORM_GRID_COL_GAP};
`;

const StyledForm = styled.form<{ type: 'flex' | 'grid' }>`
  ${props => (props.type === 'flex' ? flexForm : gridForm)}

  width: 100%;
`;

const FormField = styled.div<{ area: 'string' }>`
  grid-area: ${props => (props.area ? props.area : '')};

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

const FormButton = styled.div<{ area?: number }>`
  display: flex;
  justify-content: center;
  grid-area: ${props => (props.area ? props.area : '')};
`;

export { ErrorMessage, FormButton, FormField, FormLabel, StyledForm };
