import styled from 'styled-components';

const HEADING_MARGIN = '96px 0px 40px';
const CARDS_CONTAINER_GAP = '70px';
const CARDS_CONTAINER_WIDTH = '948px';
const CARDS_CONTAINER_MARGIN_BOTTOM = '252px';

const Heading = styled.h2`
  ${props => props.theme.typography.h1}
  margin: ${HEADING_MARGIN};
`;

const SectionContent = styled.section`
  display: flex;
  justify-content: space-between;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  row-gap: ${CARDS_CONTAINER_GAP};

  width: ${CARDS_CONTAINER_WIDTH};
  margin-bottom: ${CARDS_CONTAINER_MARGIN_BOTTOM};
`;

export { CardsContainer, Heading, SectionContent };
