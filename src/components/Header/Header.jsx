import { useContext } from 'react';
import { LoginPanel } from 'src/components/LoginPanel/LoginPanel';
import { Title } from 'src/components/Title/Title';
import { Toggler } from 'src/components/Toggler/Toggler';
import { ButtonThemeContext } from 'src/contexts/ButtonThemeContext/ButtonThemeContext';

import styles from './Header.module.scss';

export const Header = () => {
  const { theme, switchTheme } = useContext(ButtonThemeContext);

  const handleOnChange = (e) => switchTheme(e.target.checked);

  return (
    <section className={styles.header}>
      <Title
        level={1}
        value='Food Delivery Service'
        className={styles.headerTitle}
      />
      <div className={styles.headerActions}>
        <LoginPanel theme={theme} />
        <Toggler onChange={handleOnChange} />
      </div>
    </section>
  );
};
