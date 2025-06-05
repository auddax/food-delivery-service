import { useSelector } from 'react-redux';
import { ItemDetail } from 'src/components/ItemDetail/ItemDetail';
import { MenuItemCounter } from 'src/components/MenuItem/MenuItemCounter';
import { Title } from 'src/components/Title/Title';
import { selectDishById } from 'src/store/slices/dish/dish.slice';

import styles from './MenuItem.module.scss';

export const MenuItem = ({ id }) => {
  const { name, price, ingredients } =
    useSelector((state) => selectDishById(state, id)) || {};

  return (
    <li className={styles.menuItem}>
      <Title level={4} value={name} />
      <ItemDetail title='Цена:' value={`${price}$`} />
      <ItemDetail title='Состав:' value={ingredients?.join(', ')} />
      <ItemDetail title='Количество:' value={<MenuItemCounter />} />
    </li>
  );
};
