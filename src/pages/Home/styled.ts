import styled from 'styled-components';

const ProductSection = styled.section`
  margin: 64px 0px 252px;
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
  row-gap: 80px;
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
