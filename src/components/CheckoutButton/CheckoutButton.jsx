import { Button } from 'src/components/Button/Button';

import styles from './CheckoutButton.module.scss';

export const CheckoutButton = () => (
  <Button className={styles.checkoutBtn}>Перейти к оплате</Button>
);
