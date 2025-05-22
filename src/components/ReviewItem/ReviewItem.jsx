import styles from './ReviewItem.module.scss';

export const ReviewItem = ({ user, text, rating }) => (
  <li className={styles['review']}>
    <h4>{user}</h4>
    <div>
      <span>Отзыв: {text}</span>
    </div>
    <div>
      <span>Oценка: {rating}</span>
    </div>
  </li>
);
