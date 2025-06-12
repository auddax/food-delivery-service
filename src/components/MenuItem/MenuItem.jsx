import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { NavigationLink } from 'src/components/NavigationLink/NavigationLink';
import { Title } from 'src/components/Title/Title';
import { selectDishById } from 'src/store/slices/dish/dish.slice';

import styles from './MenuItem.module.scss';

export const MenuItem = ({ id }) => {
  const { name } = useSelector((state) => selectDishById(state, id)) || {};

  return (
    <li className={styles.menuItem}>
      <NavigationLink path={`/dish/${id}`} className={styles.menuItemLink}>
        {name}
      </NavigationLink>
    </li>
  );
};
