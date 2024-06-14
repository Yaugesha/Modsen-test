import styled, { css } from 'styled-components';

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 646px;
  overflow-x: hidden;

  padding-top: 8px;
  margin-top: 64px;
`;

const SliderContent = styled.div`
  position: absolute;
  display: flex;
  gap: 64px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  border-radius: 16px;

  width: 1268px;
  height: 646px;
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

const paginationItemActive = css`
  width: 16px;
  height: 16px;
`;

const paginationItemInactive = css`
  width: 10px;
  height: 10px;
`;

const PaginationItem = styled.div<{ isactive?: boolean }>`
  ${props => (props.isactive ? paginationItemActive : paginationItemInactive)}
  border-radius: 99px;
  background-color: ${props => props.theme.main};

  cursor: pointer;
`;

export {
  SliderWrapper,
  SliderContent,
  Image,
  ImageWrapper,
  SliderPagination,
  PaginationItem,
};
