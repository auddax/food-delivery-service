import { useSelector } from 'react-redux';
import { ItemDetail } from 'src/components/ItemDetail/ItemDetail';
import { Title } from 'src/components/Title/Title';
import { selectReviewById } from 'src/store/slices/review/review.slice';
import { selectUserById } from 'src/store/slices/user/user.slice';

import styles from './ReviewItem.module.scss';

export const ReviewItem = ({ id }) => {
  const { userId, text, rating } =
    useSelector((state) => selectReviewById(state, id)) || {};
  const { name } = useSelector((state) => selectUserById(state, userId)) || {};

  return (
    <li className={styles.review}>
      <Title level={4} value={name} />
      <ItemDetail title='Отзыв:' value={text} />
      <ItemDetail title='Oценка:' value={rating} />
    </li>
  );
};
