import { ItemDetail } from 'src/components/ItemDetail/ItemDetail';
import { MenuItemCounter } from 'src/components/MenuItem/MenuItemCounter';
import { Title } from 'src/components/Title/Title';

import styles from './Dish.module.scss';

export const Dish = ({ dish }) => {
  if (!dish) return null;

  console.log(dish);

  const { id, name, price, ingredients } = dish;

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
