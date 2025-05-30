import { ItemDetail } from 'src/components/ItemDetail/ItemDetail';
import { MenuItemCounter } from 'src/components/MenuItem/MenuItemCounter';
import { Title } from 'src/components/Title/Title';

import styles from './MenuItem.module.scss';

export const MenuItem = ({ name, price, ingredients }) => (
  <li className={styles.menuItem}>
    <Title level={4} value={name} />
    <ItemDetail title='Цена:' value={`${price}$`} />
    <ItemDetail title='Состав:' value={ingredients?.join(', ')} />
    <ItemDetail title='Количество:' value={<MenuItemCounter />} />
  </li>
);
