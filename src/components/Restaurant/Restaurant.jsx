import { Menu } from 'src/components/Menu/Menu';
import { ReviewsList } from 'src/components/ReviewsList/ReviewsList';

import styles from './Restaurant.module.scss';

export const Restaurant = ({ restaurant = {} }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <section className={styles['restaurant']}>
      <h2 className={styles['name']}>{name}</h2>
      <Menu menu={menu} />
      <ReviewsList reviews={reviews} />
    </section>
  );
};
