import { useSelector } from 'react-redux';
import { ReviewItem } from 'src/components/ReviewItem/ReviewItem';
import { Title } from 'src/components/Title/Title';
import { selectReveiwIds } from 'src/store/slices/review/review.slice';

import styles from './ReviewsList.module.scss';

export const ReviewsList = () => {
  const reviews = useSelector(selectReveiwIds);

  if (!reviews?.length) return null;

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
