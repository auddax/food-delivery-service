import { useSelector } from 'react-redux';
import { MenuItem } from 'src/components/MenuItem/MenuItem';
import { Title } from 'src/components/Title/Title';
import { selectRestaurantById } from 'src/store/slices/restaurant/restaurant.slice';

import styles from './Menu.module.scss';

export const Menu = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) return null;

  const { menu } = restaurant;

  return (
    <div className={styles.menu}>
      <Title level={3} value='Меню' className={styles.menuTitle} />
      <ul>
        {menu.map((id) => (
          <MenuItem key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};
