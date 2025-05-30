import { ItemDetail } from 'src/components/ItemDetail/ItemDetail';
import { Title } from 'src/components/Title/Title';

import styles from './ReviewItem.module.scss';

export const ReviewItem = ({ user, text, rating }) => (
  <li className={styles.review}>
    <Title level={4} value={user} />
    <ItemDetail title='Отзыв:' value={text} />
    <ItemDetail title='Oценка:' value={rating} />
  </li>
);
