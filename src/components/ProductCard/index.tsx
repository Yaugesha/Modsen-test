import { Product } from 'src/types/Product';
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

  const handleAddToCart = () => {
    dispatch({ type: 'cart/addProduct', payload: product });
  };

  return (
    <Card width={width} height={height}>
      <ImageContainer size={width}>
        <Image size={width} src={product.image} alt={product.title} />
        <Action top={width} onClick={handleAddToCart}>
          <span>Add to cart</span>
        </Action>
      </ImageContainer>
      <Title>{product.title}</Title>
      <Price>${fullCost(product.price)}</Price>
    </Card>
  );
};

export default ProductCard;
