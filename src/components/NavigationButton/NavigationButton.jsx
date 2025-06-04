import { useSelector } from 'react-redux';
import { selectRestaurantById } from 'src/store/slices/restaurant/restaurant.slice';

import styles from './NavigationButton.module.scss';

export const NavigationButton = ({ id, handleClick }) => {
  const { name } =
    useSelector((state) => selectRestaurantById(state, id)) || {};

  if (!name) return null;

  return (
    <button className={styles.navBtn} onClick={handleClick}>
      {name}
    </button>
  );
};
