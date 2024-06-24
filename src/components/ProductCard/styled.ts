import styled from 'styled-components';

const Card = styled.div<{ width: number; height: number }>`
  display: flex;
  flex-flow: column;
  align-items: start;
  justify-content: space-between;

  width: ${props => props.width}px;
  height: ${props => props.height}px;

  cursor: pointer;
`;

const Action = styled.div<{ top: number }>`
  position: absolute;
  top: ${props => props.top}px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.theme.typography.l}
  text-transform: uppercase;

  background-color: rgba(256, 256, 256, 0.5);

  height: 64px;
  width: 100%;

  transition: all ${props => props.theme.transition.ms400};
  cursor: pointer;

  &:hover,
  &:active {
    background-color: rgba(227, 227, 227, 0.5);
  }
`;

const ImageContainer = styled.div<{ size: number }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  height: ${props => props.size}px;
  width: ${props => props.size}px;

  &:hover ${Action} {
    top: ${props => props.size - 64}px;
  }
`;

const Image = styled.img<{ size: number }>`
  align-self: center;
  border-radius: ${props => props.theme.borderR.s};

  max-height: ${props => props.size}px;
  max-width: ${props => props.size}px;
`;

const Title = styled.p`
  white-space: nowrap;
  overflow: hidden;

  ${props => props.theme.typography.h3}
  text-overflow: ellipsis;

  width: 100%;
`;

const Price = styled.span`
  ${props => props.theme.typography.h4}
  color: ${props => props.theme.colors.accent}
`;

export { Action, Card, Image, ImageContainer, Price, Title };
