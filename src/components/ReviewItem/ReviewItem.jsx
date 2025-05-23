import { ItemDetail } from 'src/components/ItemDetail/ItemDetail';

import styles from './ReviewItem.module.scss';

export const ReviewItem = ({ user, text, rating }) => (
  <li className={styles['review']}>
    <h4>{user}</h4>
    <ItemDetail title='Отзыв:' value={text} />
    <ItemDetail title='Oценка:' value={rating} />
  </li>
);
