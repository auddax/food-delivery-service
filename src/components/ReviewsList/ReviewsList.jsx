import { ReviewItem } from 'src/components/ReviewItem/ReviewItem';

import styles from './ReviewsList.module.scss';

export const ReviewsList = ({ reviews }) => (
  <div className={styles['reviews-list']}>
    <h3>Отзывы</h3>
    <ul>
      {reviews?.map(({ id, ...restProps }) => (
        <ReviewItem key={id} {...restProps} />
      ))}
    </ul>
  </div>
);
