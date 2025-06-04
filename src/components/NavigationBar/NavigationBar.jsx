import { NavigationButton } from 'src/components/NavigationButton/NavigationButton';

import styles from './NavigationBar.module.scss';

export const NavigationBar = ({ items, onButtonClick }) => (
  <section className={styles.navBar}>
    {items?.map((id) => (
      <NavigationButton
        key={id}
        id={id}
        handleClick={() => onButtonClick(id)}
      />
    ))}
  </section>
);
