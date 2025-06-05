import { RestaurantButton } from 'src/components/RestaurantButton/RestaurantButton';

import styles from './NavigationBar.module.scss';

export const NavigationBar = ({ items, onButtonClick }) => (
  <section className={styles.navBar}>
    {items?.map((id) => (
      <RestaurantButton
        key={id}
        id={id}
        handleClick={() => onButtonClick(id)}
      />
    ))}
  </section>
);
