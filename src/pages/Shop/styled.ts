import styled from 'styled-components';

const Heading = styled.h2`
  ${props => props.theme.typography.h1}
  margin: 96px 0px 40px;
`;

const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  row-gap: 70px;

  width: 948px;
  margin-bottom: 252px;
`;

export { CardsContainer, Heading, SectionContent };
