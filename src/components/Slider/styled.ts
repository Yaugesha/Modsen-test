import styled from 'styled-components';

const SliderWrapper = styled.div<{ width: number; height: number }>`
  position: relative;

  width: ${props => props.width}px;
  height: ${props => props.height}px;

  overflow-x: hidden;
`;

const SliderContent = styled.div<{ gap: number }>`
  position: absolute;
  display: flex;
  gap: ${props => props.gap}px;

  transition: left 0.5s;
`;

const ImageWrapper = styled.div<{ width: number; height: number }>`
  display: flex;
  justify-content: center;

  border-radius: 16px;

  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const Image = styled.img`
  height: 100%;
`;

const SliderPagination = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;

  display: flex;
  align-items: center;
  gap: 14px;

  margin: auto;
`;

const PaginationItemActive = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid ${props => props.theme.accent};
  border-radius: 99px;
`;

const PaginationItemInactive = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${props => props.theme.accent};
  border-radius: 99px;
  cursor: pointer;
`;

export {
  SliderWrapper,
  SliderContent,
  Image,
  ImageWrapper,
  SliderPagination,
  PaginationItemActive,
  PaginationItemInactive,
};
