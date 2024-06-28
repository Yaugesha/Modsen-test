import CartItem from '@components/CartItem';
import { CartItem as CartItemType } from '@customTypes/cart';
import { useAppSelector } from '@hooks/store/useAppSelector';
import { Heading } from '@pages/Shop/styled';

const Cart = () => {
  const cart = useAppSelector(state => state.cart);

  return (
    <section>
      <Heading>Cart</Heading>
      <ul>
        {cart.products.map((cartItem: CartItemType) => {
          return (
            <CartItem
              key={cartItem.product.id}
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
