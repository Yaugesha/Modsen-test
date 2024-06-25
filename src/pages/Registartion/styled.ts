import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  max-width: 400px;
  margin: ${props => props.theme.margins.xl} auto
    ${props => props.theme.margins.m};
`;

const FormTitle = styled.h2`
  ${props => props.theme.typography.h2}
  margin-bottom: ${props => props.theme.margins.s};
`;

const MessageToAuthorization = styled.p`
  color: ${props => props.theme.colors.secondary};
  ${props => props.theme.typography.h5};
`;

const LinkToAuthorization = styled.span`
  color: ${props => props.theme.colors.darkGrey};
  ${props => props.theme.typography.h5};
  font-weight: bold;
`;

export {
  FormContainer,
  FormTitle,
  LinkToAuthorization,
  MessageToAuthorization,
};
