import { Menu } from 'src/components/Menu/Menu';
import { ReviewsList } from 'src/components/ReviewsList/ReviewsList';

import styles from './RestaurantDetail.module.scss';

export const RestaurantDetail = ({ restaurant = {} }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <section className={styles['restaurant']}>
      <h2 className={styles['name']}>{name}</h2>
      <Menu menu={menu} />
      <ReviewsList reviews={reviews} />
    </section>
  );
};
