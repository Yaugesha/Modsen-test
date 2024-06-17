import { Product } from '@utils/types';
import { Card, Image, ImageContainer, Price, Title, Action } from './styled';

interface ProductCard {
  product: Product;
}

const ProductCard = ({ product }: ProductCard) => {
  const fullCost = (price: number) => price.toFixed(2);

  return (
    <Card>
      <ImageContainer>
        <Image src={product.image} alt={product.title} />
        <Action>
          <span>Add to cart</span>
        </Action>
      </ImageContainer>
      <Title>{product.title}</Title>
      <Price>${fullCost(product.price)}</Price>
    </Card>
  );
};

export default ProductCard;
