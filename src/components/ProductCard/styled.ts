import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  justify-content: space-between;

  width: 380px;
  height: 472px;
`;

const Action = styled.div`
  position: absolute;
  top: 380px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.theme.typography.l}
  text-transform: uppercase;

  background-color: rgba(256, 256, 256, 0.5);

  height: 64px;
  width: 380px;

  transition: top 0.4s;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  height: 380px;
  width: 380px;

  &:hover ${Action} {
    top: 316px;
  }
`;

const Image = styled.img`
  align-self: center;
  border-radius: 8px;

  max-height: 380px;
  max-width: 380px;
`;

const Title = styled.p`
  white-space: nowrap;
  overflow: hidden;

  ${props => props.theme.typography.h3}
  text-overflow: ellipsis;

  width: 380px;
  margin: 0;
`;

const Price = styled.span`
  ${props => props.theme.typography.h4}
  color: ${props => props.theme.accent}
`;

export { Card, ImageContainer, Image, Title, Price, Action };
