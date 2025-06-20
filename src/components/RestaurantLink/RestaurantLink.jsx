import { NavigationLink } from 'src/components/NavigationLink/NavigationLink';

import styles from './RestaurantLink.module.scss';

export const RestaurantLink = ({ name, id }) => {
  if (!name || !id) return null;

  return (
    <NavigationLink className={styles.navBtn} path={id}>
      {name}
    </NavigationLink>
  );
};
