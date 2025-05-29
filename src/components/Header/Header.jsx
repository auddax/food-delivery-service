import { Title } from 'src/components/Title/Title';

import styles from './Header.module.scss';

export const Header = () => (
  <section className={styles['header']}>
    <Title level={1} value='Food Delivery Service' className={styles['header-title']} />
  </section>
);
