import { PRODUCT_ROUTE } from '@constants/routes';
import { Product } from '@customTypes/product';
import { useAppDispatch } from '@hooks/store/useAppDispatch';
import { fullCost } from '@utils/productHelper';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Action, Card, Image, ImageContainer, Price, Title } from './styled';

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
    if (target !== buttonRef.current)
      navigate(`${PRODUCT_ROUTE}/${product.id}`);
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
