import CartItem from '@components/CartItem';
import { CartItem as CartItemType } from '@customTypes/cart';
import { Heading } from '@pages/Shop/styled';
import { useAppSelector } from 'src/hooks/store/useAppSelector';

const Cart = () => {
  const cart = useAppSelector(state => state.cart);

  return (
    <section>
      <Heading>Cart</Heading>
      <ul>
        {cart.products.map((cartItem: CartItemType, idx: number) => {
          return (
            <CartItem
              key={idx}
              product={cartItem.product}
              count={cartItem.count}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Cart;
