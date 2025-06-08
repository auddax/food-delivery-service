import { ShoppingCartOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { Button } from 'src/components/Button/Button';
import { UserContext } from 'src/contexts/UserContext/UserContext';

import styles from './CartButton.module.scss';

export const CartButton = () => {
  const { user } = useContext(UserContext);

  if (!user?.isAuthorized) return null;

  return (
    <Button className={styles.cartBtn}>
      <ShoppingCartOutlined className={styles.cartIcon} />
    </Button>
  );
};
