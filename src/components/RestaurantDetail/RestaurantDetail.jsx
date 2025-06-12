import { useSelector } from 'react-redux';
import { RestaurantDetailBar } from 'src/components/RestaurantDetailBar/RestaurantDetailBar';
import { Title } from 'src/components/Title/Title';
import { selectRestaurantById } from 'src/store/slices/restaurant/restaurant.slice';

import styles from './RestaurantDetail.module.scss';

export const RestaurantDetail = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) return null;

  const { name } = restaurant;

  return (
    <div className={styles.restaurantDetail}>
      <Title level={2} className={styles.name} value={name} />
      <RestaurantDetailBar />
    </div>
  );
};
