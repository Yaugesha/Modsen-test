import Button from '@components/Button';
import Group from '@components/Containers/Group';
import Stack from '@components/Containers/Stack';
import ItemCounter from '@components/ItemCounter';
import { Image, ImageContainer } from '@components/ProductCard/styled';
import { Product } from '@customTypes/product';
import { fullCost } from '@utils/productHelper';

import {
  ItemPrice,
  ProductPrice,
  ProductTitle,
  StyledCartItem,
} from './styled';

interface CartItemProps {
  product: Product;
  count: number;
}

const CartItem = ({ product, count }: CartItemProps) => {
  return (
    <StyledCartItem>
      <Group align="center" gap={12}>
        <ImageContainer size={96}>
          <Image size={96} src={product.image} alt={product.title} />
        </ImageContainer>
        <Stack align="start" gap={16}>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>${fullCost(product.price)}</ProductPrice>
        </Stack>
      </Group>
      <Group align="center" gap={24}>
        <ItemPrice>${fullCost(product.price * count)}</ItemPrice>
        <ItemCounter
          count={count}
          handleDecriment={() => {}}
          handleIncriment={() => {}}
        />
        <Button name="delete" handleClick={() => {}} size="s" />
      </Group>
    </StyledCartItem>
  );
};

export default CartItem;
