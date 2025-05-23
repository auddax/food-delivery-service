import { Menu } from 'src/components/Menu/Menu';
import { ReviewsList } from 'src/components/ReviewsList/ReviewsList';
import { Title } from 'src/components/Title/Title';

import styles from './RestaurantDetail.module.scss';

export const RestaurantDetail = ({ restaurant }) => {
  if (!restaurant) return null;
  const { name, menu, reviews } = restaurant;

  return (
    <section className={styles['restaurant']}>
      <Title level={2} className={styles['name']} value={name} />
      <Menu menu={menu} />
      <ReviewsList reviews={reviews} />
    </section>
  );
};
