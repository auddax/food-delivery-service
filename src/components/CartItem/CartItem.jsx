import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton } from 'src/components/DeleteButton/DeleteButton';
import { MenuItemCounter } from 'src/components/MenuItem/MenuItemCounter';
import { useGetDishByIdQuery } from 'src/store/api';
import {
  removeAllFromCart,
  selectItemAmountById,
} from 'src/store/slices/cart/cart.slice';

import styles from './CartItem.module.scss';

export const CartItem = ({ id }) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => selectItemAmountById(state, id));
  const {
    data: { name, price },
  } = useGetDishByIdQuery(id);

  const onDelete = () => dispatch(removeAllFromCart(id));

  return (
    <li className={styles.cartItem}>
      <span>{name}</span>
      <div className={styles.cartItemDetails}>
        <span>{price}$</span>
        <MenuItemCounter id={id} />
        <span>{price * amount}$</span>
        <DeleteButton onClick={onDelete} />
      </div>
    </li>
  );
};
