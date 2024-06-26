import styled from 'styled-components';

const StyledContact = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 108px;

  max-width: 908px;
  margin-bottom: 250px;
`;

const Heading = styled.h2`
  ${props => props.theme.typography.h1}

  margin-top: 125px;
`;

const ContactDescribtion = styled.p`
  ${props => props.theme.typography.h3}
  max-width: 560px;
`;

export { ContactDescribtion, Heading, StyledContact };
