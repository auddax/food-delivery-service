import { ShoppingCartOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { Button } from 'src/components/Button/Button';
import { Cart } from 'src/components/Cart/Cart';
import { UserContext } from 'src/contexts/UserContext/UserContext';
import { useBoolean } from 'src/hooks/useBoolean';

import styles from './CartModalButton.module.scss';

export const CartModalButton = () => {
  const { user } = useContext(UserContext);
  const [isCartVisible, { toggle }] = useBoolean();

  if (!user?.isAuthorized) return null;

  return (
    <>
      <Button onClick={toggle} className={styles.cartBtn}>
        <ShoppingCartOutlined className={styles.cartIcon} />
      </Button>
      <Cart isVisible={isCartVisible} />
    </>
  );
};
