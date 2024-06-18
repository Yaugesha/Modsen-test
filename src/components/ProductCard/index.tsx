import { Product } from '@utils/types';
import { Card, Image, ImageContainer, Price, Title, Action } from './styled';

interface ProductCard {
  product: Product;
  width: number;
  height: number;
}

const ProductCard = ({ product, width, height }: ProductCard) => {
  const fullCost = (price: number) => price.toFixed(2);

  return (
    <Card width={width} height={height}>
      <ImageContainer size={width}>
        <Image size={width} src={product.image} alt={product.title} />
        <Action top={width}>
          <span>Add to cart</span>
        </Action>
      </ImageContainer>
      <Title>{product.title}</Title>
      <Price>${fullCost(product.price)}</Price>
    </Card>
  );
};

export default ProductCard;
