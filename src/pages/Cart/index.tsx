import CartItem from '@components/CartItem';
import { CartItem as CartItemType } from 'src/types/Cart';
import { useAppSelector } from '@utils/hooks/storeHooks';
import { Heading } from '@pages/Shop/styled';

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
