import styled from 'styled-components';

const ProductSection = styled.section`
  margin: 64px 0px 252px;
`;

const SliderSection = styled.div`
  padding-top: 8px;
  margin-top: 64px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionHeading = styled.h2`
  ${props => props.theme.typography.h1}
`;

const SectionContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  row-gap: 80px;
`;

export {
  SliderSection,
  ProductSection,
  SectionHeader,
  SectionHeading,
  SectionContent,
};
