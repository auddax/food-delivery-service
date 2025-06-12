import { useSelector } from 'react-redux';
import { ItemDetail } from 'src/components/ItemDetail/ItemDetail';
import { MenuItemCounter } from 'src/components/MenuItem/MenuItemCounter';
import { Title } from 'src/components/Title/Title';
import { selectDishById } from 'src/store/slices/dish/dish.slice';

import styles from './Dish.module.scss';

export const Dish = ({ id }) => {
  const { name, price, ingredients } =
    useSelector((state) => selectDishById(state, id)) || {};

  return (
    <section className={styles.dish}>
      <Title level={3} value={name} className={styles.dishTitle} />
      <ItemDetail
        title='Цена:'
        value={`${price}$`}
        className={styles.dishDetail}
      />
      <ItemDetail
        title='Состав:'
        value={ingredients?.join(', ')}
        className={styles.dishDetail}
      />
      <ItemDetail
        title='Количество:'
        value={<MenuItemCounter id={id} />}
        className={styles.dishDetail}
      />
    </section>
  );
};
