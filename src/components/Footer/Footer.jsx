import { CartModalButton } from 'src/components/CartModalButton/CartModalButton';

import styles from './Footer.module.scss';

export const Footer = () => (
  <section className={styles.footer}>
    <div>contact@example.com</div>
    <div>© {new Date().getFullYear()}</div>
    <CartModalButton />
  </section>
);
