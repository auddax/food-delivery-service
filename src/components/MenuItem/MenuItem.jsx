import { Counter } from 'src/components/Counter/Counter';
import { ItemDetail } from 'src/components/ItemDetail/ItemDetail';
import { Title } from 'src/components/Title/Title';
import { MENU_ITEMS_COUNTER } from 'src/constants';
import { useCounter } from 'src/hooks/useCounter';

import styles from './MenuItem.module.scss';

const MenuItemCounter = () => {
  const [count, increment, decrement] = useCounter({ ...MENU_ITEMS_COUNTER });
  return <Counter count={count} increment={increment} decrement={decrement} />;
};

export const MenuItem = ({ name, price, ingredients }) => (
  <li className={styles['menu-item']}>
    <Title level={4} value={name} />
    <ItemDetail title='Цена:' value={`${price}$`} />
    <ItemDetail title='Состав:' value={ingredients?.join(', ')} />
    <ItemDetail title='Количество:' value={<MenuItemCounter />} />
  </li>
);
