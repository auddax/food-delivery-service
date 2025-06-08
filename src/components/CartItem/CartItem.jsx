import { DeleteOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { MenuItemCounter } from 'src/components/MenuItem/MenuItemCounter';
import { selectItemAmountById } from 'src/store/slices/cart/cart.slice';
import { selectDishById } from 'src/store/slices/dish/dish.slice';

import styles from './CartItem.module.scss';

export const CartItem = ({ id }) => {
  const amount = useSelector((state) => selectItemAmountById(state, id)) || {};
  const { name, price } =
    useSelector((state) => selectDishById(state, id)) || {};

  return (
    <li className={styles.cartItem}>
      <span>{name}</span>
      <span>{price}</span>
      <span>{amount}</span>
      <MenuItemCounter id={id} />
      <DeleteOutlined />
    </li>
  );
};
