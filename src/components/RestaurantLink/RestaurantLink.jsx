import { useSelector } from 'react-redux';
import { NavigationLink } from 'src/components/NavigationLink/NavigationLink';
import { selectRestaurantById } from 'src/store/slices/restaurant/restaurant.slice';

import styles from './RestaurantLink.module.scss';

export const RestaurantLink = ({ id }) => {
  const { name } =
    useSelector((state) => selectRestaurantById(state, id)) || {};

  if (!name) return null;

  return (
    <NavigationLink className={styles.navBtn} path={id}>
      {name}
    </NavigationLink>
  );
};
