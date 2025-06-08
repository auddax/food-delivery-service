import { CartButton } from 'src/components/CartButton/CartButton';

import styles from './Footer.module.scss';

export const Footer = () => (
  <section className={styles.footer}>
    <div>contact@example.com</div>
    <div>© {new Date().getFullYear()}</div>
    <CartButton />
  </section>
);
