import { useSelector } from 'react-redux';
import { Menu } from 'src/components/Menu/Menu';
import { ReviewForm } from 'src/components/ReviewForm/ReviewForm';
import { ReviewsList } from 'src/components/ReviewsList/ReviewsList';
import { Title } from 'src/components/Title/Title';
import { selectRestaurantById } from 'src/store/slices/restaurant/restaurant.slice';

import styles from './RestaurantDetail.module.scss';

export const RestaurantDetail = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) return null;

  const { name, menu, reviews } = restaurant;

  return (
    <section className={styles.restaurant}>
      <Title level={2} className={styles.name} value={name} />
      <Menu menu={menu} />
      <ReviewsList reviews={reviews} />
      <ReviewForm />
    </section>
  );
};
