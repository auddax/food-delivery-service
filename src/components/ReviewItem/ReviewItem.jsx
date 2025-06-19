import { ItemDetail } from 'src/components/ItemDetail/ItemDetail';
import { Title } from 'src/components/Title/Title';

import styles from './ReviewItem.module.scss';

export const ReviewItem = ({ review, users }) => {
  if (!review) return null;

  const { userId, text, rating } = review;
  const user = users.find((user) => user.id === userId);

  return (
    <li className={styles.review}>
      <Title level={4} value={user?.name} />
      <ItemDetail title='Отзыв:' value={text} />
      <ItemDetail title='Oценка:' value={rating} />
    </li>
  );
};
