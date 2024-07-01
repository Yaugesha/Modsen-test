import styled from 'styled-components';

const SLIDER_PAGINATION_BOTTOM = '24px';
const SLIDER_PAGINATION_GAP = '14px';

const PAGINATION_ITEM_ACTIVE_SIZE = '16px';
const PAGINATION_ITEM_INACTIVE_SIZE = '10px';

const SliderWrapper = styled.div<{ width: number; height: number }>`
  position: relative;
  display: flex;
  justify-content: center;

  width: ${props => props.width}px;
  height: ${props => props.height}px;

  overflow-x: hidden;
`;

const SliderContent = styled.div<{ gap: number }>`
  position: absolute;
  left: 0;
  display: flex;
  gap: ${props => props.gap}px;

  transition: left ${props => props.theme.transition.ms500};
`;

const ImageWrapper = styled.div<{ width: number; height: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${props => props.theme.borderR.m};

  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const Image = styled.img<{ size: number }>`
  max-width: ${props => props.size}px;
  max-height: ${props => props.size}px;
`;

const SliderPagination = styled.div`
  position: absolute;
  bottom: ${SLIDER_PAGINATION_BOTTOM};

  display: flex;
  align-items: center;
  gap: ${SLIDER_PAGINATION_GAP};

  margin: auto;
`;

const PaginationItemActive = styled.div`
  border: ${props => props.theme.borders[2] + props.theme.colors.accent};
  border-radius: ${props => props.theme.borderR.round};

  width: ${PAGINATION_ITEM_ACTIVE_SIZE};
  height: ${PAGINATION_ITEM_ACTIVE_SIZE};
`;

const PaginationItemInactive = styled.div`
  background-color: ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.borderR.round};

  width: ${PAGINATION_ITEM_INACTIVE_SIZE};
  height: ${PAGINATION_ITEM_INACTIVE_SIZE};

  cursor: pointer;
`;

export {
  Image,
  ImageWrapper,
  PaginationItemActive,
  PaginationItemInactive,
  SliderContent,
  SliderPagination,
  SliderWrapper,
};
