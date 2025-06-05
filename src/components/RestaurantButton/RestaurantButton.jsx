import { useSelector } from 'react-redux';
import { selectRestaurantById } from 'src/store/slices/restaurant/restaurant.slice';

import styles from './RestaurantButton.module.scss';

export const RestaurantButton = ({ id, handleClick }) => {
  const { name } =
    useSelector((state) => selectRestaurantById(state, id)) || {};

  if (!name) return null;

  return (
    <button className={styles.navBtn} onClick={handleClick}>
      {name}
    </button>
  );
};
