import { NavigationLink } from 'src/components/NavigationLink/NavigationLink';
import { APP_PATHS } from 'src/constants';

import styles from './RestaurantLink.module.scss';

export const RestaurantLink = ({ name, id }) => {
  if (!name || !id) return null;

  return (
    <NavigationLink
      className={styles.navBtn}
      path={`${APP_PATHS.RESTAURANTS}/${id}`}
    >
      {name}
    </NavigationLink>
  );
};
