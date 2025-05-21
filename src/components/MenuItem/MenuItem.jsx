import { Counter } from 'src/components/Counter/Counter';

import styles from './MenuItem.module.scss';

export const MenuItem = ({ name, price, ingredients }) => (
  <li className={styles['menu-item']}>
      <h4>{name}</h4>
      <div>
        <span>Цена: {price}$</span>
      </div>
      <div>
        <span>Состав: {ingredients?.join(', ')}</span>
      </div>
      <div>
        <span>Количество: </span>
        <Counter />
      </div>
  </li>
);
