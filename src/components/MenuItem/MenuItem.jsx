import { Counter } from 'src/components/Counter/Counter';
import { ItemDetail } from 'src/components/ItemDetail/ItemDetail';
import { MENU_ITEMS_COUNTER } from 'src/constants';

import styles from './MenuItem.module.scss';

const MenuItemCounter = () => <Counter {...MENU_ITEMS_COUNTER} />;

export const MenuItem = ({ name, price, ingredients }) => (
  <li className={styles['menu-item']}>
    <h4>{name}</h4>
    <ItemDetail title='Цена:' value={`${price}$`} />
    <ItemDetail title='Состав:' value={ingredients?.join(', ')} />
    <ItemDetail title='Количество:' value={<MenuItemCounter />} />
  </li>
);
