import { ReviewItem } from 'src/components/ReviewItem/ReviewItem';
import { Title } from 'src/components/Title/Title';

import styles from './ReviewsList.module.scss';

export const ReviewsList = ({ reviews, users }) => {
  if (!reviews?.length) return null;

  return (
    <div className={styles.reviewsList}>
      <Title level={3} value='Отзывы' />
      <ul>
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} users={users} />
        ))}
      </ul>
    </div>
  );
};
