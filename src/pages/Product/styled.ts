import styled from 'styled-components';

const PRODUCT_INFO_HEIGHT = '600px';
const PRODUCT_INFO_MARGIN_TOP = '128px';

const DESCRIPTION_SECTION_GAP = '72px';
const DESCRIPTION_SECTION_MARGIN_TOP = '122px';

const SIMILAR_ITEMS_SECTION_GAP = '48px';
const SIMILAR_ITEMS_SECTION_MARGIN = '96px 0px 250px';

const ProductInfo = styled.section`
  display: flex;
  align-items: start;
  justify-content: space-between;

  height: ${PRODUCT_INFO_HEIGHT};
  margin-top: ${PRODUCT_INFO_MARGIN_TOP};
`;

const PhotoContainer = styled.div<{ size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${props => props.size}px;
  width: ${props => props.size}px;
`;

const Photo = styled.img<{ size: number }>`
  align-self: center;
  border-radius: ${props => props.theme.borderR.s};

  max-height: ${props => props.size}px;
  max-width: ${props => props.size}px;
`;

const MainHeading = styled.h2`
  ${props => props.theme.typography.h2}
`;

const ProductPrice = styled.span`
  ${props => props.theme.typography.h4};
  color: ${props => props.theme.colors.accent};
`;

const Description = styled.p`
  ${props => props.theme.typography.h5};
  color: ${props => props.theme.colors.darkGrey};
`;

const Highlited = styled.span`
  color: ${props => props.theme.colors.secondary};
`;

const Categories = styled.p`
  ${props => props.theme.typography.h5};
  color: ${props => props.theme.colors.darkGrey};
`;

const DescriptionSection = styled.section`
  display: flex;
  flex-flow: column;
  align-items: start;
  gap: ${DESCRIPTION_SECTION_GAP};

  margin-top: ${DESCRIPTION_SECTION_MARGIN_TOP};
`;

const SectionHeading = styled.h3`
  ${props => props.theme.typography.h3};
`;

const SimilarItemsSection = styled.section`
  display: flex;
  flex-flow: column;
  gap: ${SIMILAR_ITEMS_SECTION_GAP};

  margin: ${SIMILAR_ITEMS_SECTION_MARGIN};
`;

export {
  Categories,
  Description,
  DescriptionSection,
  Highlited,
  MainHeading,
  Photo,
  PhotoContainer,
  ProductInfo,
  ProductPrice,
  SectionHeading,
  SimilarItemsSection,
};
