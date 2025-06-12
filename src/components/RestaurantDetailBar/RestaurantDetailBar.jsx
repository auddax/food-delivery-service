import { NavigationBar } from 'src/components/NavigationBar/NavigationBar';
import { NavigationLink } from 'src/components/NavigationLink/NavigationLink';
import { RESTAURANT_DETAIL_PATHS } from 'src/constants';

import styles from './RestaurantDetailBar.module.scss';

export const RestaurantDetailBar = () => (
  <NavigationBar className={styles.detailBar}>
    {Object.entries(RESTAURANT_DETAIL_PATHS).map(([title, path]) => (
      <NavigationLink key={path} path={path} className={styles.detailBarLink}>
        {title}
      </NavigationLink>
    ))}
  </NavigationBar>
);
