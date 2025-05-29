import styles from './Footer.module.scss';

export const Footer = () => (
  <section className={styles['footer']}>
    <div>contact@example.com</div>
    <div>© {new Date().getFullYear()}</div>
  </section>
);
