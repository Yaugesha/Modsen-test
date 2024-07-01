import styled from 'styled-components';

const FORM_CONTAINER_WIDTH = '400px';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.gaps.xl};

  max-width: ${FORM_CONTAINER_WIDTH};
  margin: ${props => props.theme.margins.xl} auto
    ${props => props.theme.margins.m};
`;

const FormTitle = styled.h2`
  ${props => props.theme.typography.h2}
  margin-bottom: ${props => props.theme.margins.s};
`;

const MessageToRegistartion = styled.p`
  color: ${props => props.theme.colors.secondary};
  ${props => props.theme.typography.h5};
`;

const LinkToRegistartion = styled.span`
  color: ${props => props.theme.colors.darkGrey};
  ${props => props.theme.typography.h5};
  font-weight: bold;
`;

export { FormContainer, FormTitle, LinkToRegistartion, MessageToRegistartion };
