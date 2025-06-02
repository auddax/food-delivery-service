import { LoginPanel } from 'src/components/LoginPanel/LoginPanel';
import { ThemeToggler } from 'src/components/ThemeToggler/ThemeToggler';
import { Title } from 'src/components/Title/Title';

import styles from './Header.module.scss';

export const Header = () => (
  <section className={styles.header}>
    <Title
      level={1}
      value='Food Delivery Service'
      className={styles.headerTitle}
    />
    <div className={styles.headerActions}>
      <LoginPanel />
      <ThemeToggler />
    </div>
  </section>
);
