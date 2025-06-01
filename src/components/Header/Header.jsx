import { useContext } from 'react';
import { Title } from 'src/components/Title/Title';
import { Toggler } from 'src/components/Toggler/Toggler';
import { ButtonThemeContext } from 'src/contexts/ButtonThemeContext/ButtonThemeContext';

import styles from './Header.module.scss';

export const Header = () => {
  const { switchTheme } = useContext(ButtonThemeContext);

  return (
    <section className={styles.header}>
      <Title
        level={1}
        value='Food Delivery Service'
        className={styles.headerTitle}
      />
      <Toggler onChange={switchTheme} />
    </section>
  );
};
