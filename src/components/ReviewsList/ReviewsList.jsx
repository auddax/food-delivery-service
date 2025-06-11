import { useSelector } from 'react-redux';
import { ReviewItem } from 'src/components/ReviewItem/ReviewItem';
import { Title } from 'src/components/Title/Title';
import { selectRestaurantById } from 'src/store/slices/restaurant/restaurant.slice';

import styles from './ReviewsList.module.scss';

export const ReviewsList = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) return null;

  const { reviews } = restaurant;

  return (
    <div className={styles.reviewsList}>
      <Title level={3} value='Отзывы' />
      <ul>
        {reviews.map((id) => (
          <ReviewItem key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};
