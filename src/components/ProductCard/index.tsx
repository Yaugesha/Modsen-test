import { Product } from '@utils/types';
import { Card, Image, ImageContainer, Price, Title, Action } from './styled';
import { useAppDispatch } from '@utils/hooks/storeHooks';
import { fullCost } from '@utils/productHelper';

interface ProductCard {
  product: Product;
  width: number;
  height: number;
}

const ProductCard = ({ product, width, height }: ProductCard) => {
  const dispatch = useAppDispatch();

  return (
    <Card width={width} height={height}>
      <ImageContainer size={width}>
        <Image size={width} src={product.image} alt={product.title} />
        <Action
          top={width}
          onClick={() => {
            dispatch({ type: 'cart/addProduct', payload: product });
          }}>
          <span>Add to cart</span>
        </Action>
      </ImageContainer>
      <Title>{product.title}</Title>
      <Price>${fullCost(product.price)}</Price>
    </Card>
  );
};

export default ProductCard;
