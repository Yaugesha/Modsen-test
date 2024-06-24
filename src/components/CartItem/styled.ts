import styled from 'styled-components';

const StyledCartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  padding: ${props => props.theme.paddings.m} 0px;
`;

const ProductTitle = styled.p`
  ${props => props.theme.typography.h3};
`;

const ProductPrice = styled.p`
  ${props => props.theme.typography.h4}
  color: ${props => props.theme.colors.accent}
`;

const ItemPrice = styled.p`
  ${props => props.theme.typography.h4}
`;

export { StyledCartItem, ProductTitle, ProductPrice, ItemPrice };
