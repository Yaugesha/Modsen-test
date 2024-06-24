import { Product } from 'src/types/Product';
import { Card, Image, ImageContainer, Price, Title, Action } from './styled';
import { useAppDispatch } from '@utils/hooks/storeHooks';
import { fullCost } from '@utils/productHelper';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

interface ProductCard {
  product: Product;
  width: number;
  height: number;
}

const ProductCard = ({ product, width, height }: ProductCard) => {
  const dispatch = useAppDispatch();
  const buttonRef = useRef(null);

  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch({ type: 'cart/addProduct', payload: product });
  };

  const handleNavigate = (e: MouseEvent) => {
    const target = e.target;
    if (target !== buttonRef.current) navigate(`/product/${product.id}`);
  };

  return (
    <Card width={width} height={height} onClick={handleNavigate}>
      <ImageContainer size={width}>
        <Image size={width} src={product.image} alt={product.title} />
        <Action ref={buttonRef} top={width} onClick={handleAddToCart}>
          Add to cart
        </Action>
      </ImageContainer>
      <Title>{product.title}</Title>
      <Price>${fullCost(product.price)}</Price>
    </Card>
  );
};

export default ProductCard;
