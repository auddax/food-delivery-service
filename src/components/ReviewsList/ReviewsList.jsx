import { Review } from 'src/components/Review/Review';

import styles from './ReviewsList.module.scss';

export const ReviewsList = ({ reviews }) => (
  <div className={styles['reviews-list']}>
    <h3>Отзывы</h3>
    <ul>
      {reviews?.map(({ id, user, text, rating }) => (
        <Review key={id} user={user} text={text} rating={rating} />
      ))}
    </ul>
  </div>
);
