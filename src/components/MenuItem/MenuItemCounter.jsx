import { useContext } from 'react';
import { Counter } from 'src/components/Counter/Counter';
import { UserContext } from 'src/contexts/UserContext/UserContext';
import { useCounter } from 'src/hooks/useCounter';

export const MenuItemCounter = ({ id }) => {
  const { user } = useContext(UserContext);
  const [count, increment, decrement] = useCounter(id);

  if (!user?.isAuthorized) return null;

  return <Counter count={count} increment={increment} decrement={decrement} />;
};
