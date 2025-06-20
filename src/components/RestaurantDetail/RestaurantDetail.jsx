import { RestaurantDetailBar } from 'src/components/RestaurantDetailBar/RestaurantDetailBar';
import { Title } from 'src/components/Title/Title';

import styles from './RestaurantDetail.module.scss';

export const RestaurantDetail = ({ restaurant }) => {
  if (!restaurant) return null;

  const { name } = restaurant;

  return (
    <div className={styles.restaurantDetail}>
      <Title level={2} className={styles.name} value={name} />
      <RestaurantDetailBar />
    </div>
  );
};
