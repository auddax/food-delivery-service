import { Link } from 'react-router';
import { NavigationLink } from 'src/components/NavigationLink/NavigationLink';
import { Title } from 'src/components/Title/Title';

import styles from './MenuItem.module.scss';

export const MenuItem = ({ id, name }) => {
  return (
    <li className={styles.menuItem}>
      <NavigationLink path={`/dish/${id}`} className={styles.menuItemLink}>
        {name}
      </NavigationLink>
    </li>
  );
};
