import { useContext } from 'react';
import { Counter } from 'src/components/Counter/Counter';
import { MENU_ITEMS_COUNTER } from 'src/constants';
import { UserContext } from 'src/contexts/UserContext/UserContext';
import { useCounter } from 'src/hooks/useCounter';

export const MenuItemCounter = () => {
  const { user } = useContext(UserContext);
  const [count, increment, decrement] = useCounter({ ...MENU_ITEMS_COUNTER });

  if (!user?.isAuthorized) return null;

  return <Counter count={count} increment={increment} decrement={decrement} />;
};
