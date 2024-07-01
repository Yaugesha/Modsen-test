import styled from 'styled-components';

const PRODUCT_SECTION_MARGIN = '64px 0px 252px';

const SECTION_CONTENT_ROW_GAP = '80px';

const ProductSection = styled.section`
  margin: ${PRODUCT_SECTION_MARGIN};
`;

const SliderSection = styled.div`
  padding-top: ${props => props.theme.paddings.s};
  margin-top: ${props => props.theme.margins.l};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${props => props.theme.margins.m};
`;

const SectionHeading = styled.h2`
  ${props => props.theme.typography.h1}
`;

const SectionContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  row-gap: ${SECTION_CONTENT_ROW_GAP};
`;

const ShopLink = styled.span`
  ${props => props.theme.typography.h4}
  color: ${props => props.theme.colors.accent};
`;

export {
  ProductSection,
  SectionContent,
  SectionHeader,
  SectionHeading,
  ShopLink,
  SliderSection,
};
