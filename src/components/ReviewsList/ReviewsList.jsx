import { ReviewItem } from 'src/components/ReviewItem/ReviewItem';
import { Title } from 'src/components/Title/Title';

import styles from './ReviewsList.module.scss';

export const ReviewsList = ({ reviews }) => {
  if (!reviews?.length) {
    return null;
  }

  return (
    <div className={styles['reviews-list']}>
      <Title level={3} value='Отзывы' />
      <ul>
        {reviews.map(({ id, ...restProps }) => (
          <ReviewItem key={id} {...restProps} />
        ))}
      </ul>
    </div>
  );
};
