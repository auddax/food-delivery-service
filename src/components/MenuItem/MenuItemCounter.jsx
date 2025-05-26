import { Counter } from 'src/components/Counter/Counter';
import { MENU_ITEMS_COUNTER } from 'src/constants';
import { useCounter } from 'src/hooks/useCounter';

export const MenuItemCounter = () => {
  const [count, increment, decrement] = useCounter({ ...MENU_ITEMS_COUNTER });
  return <Counter count={count} increment={increment} decrement={decrement} />;
};
