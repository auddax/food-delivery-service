import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { CartItem } from 'src/components/CartItem/CartItem';
import { CheckoutButton } from 'src/components/CheckoutButton/CheckoutButton';
import { Title } from 'src/components/Title/Title';
import { selectCartItems } from 'src/store/slices/cart/cart.slice';

import styles from './Cart.module.scss';

export const Cart = ({ isVisible }) => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className={classnames(styles.cart, { [styles.hidden]: !isVisible })}>
      {!cartItems?.length && (
        <Title level={3} value='Корзина пуста' className={styles.cartEmpty} />
      )}
      <div>
        <ul>
          {cartItems.map((id) => (
            <CartItem key={id} id={id} />
          ))}
        </ul>
        {!!cartItems.length && <CheckoutButton />}
      </div>
    </div>
  );
};
