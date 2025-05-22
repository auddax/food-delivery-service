import { useCounter } from 'src/hooks/useCounter';

import styles from './Counter.module.scss';

export const Counter = ({ initialValue, minValue, maxValue }) => {
  const [count, increment, decrement] = useCounter(
    initialValue,
    minValue,
    maxValue
  );

  return (
    <span>
      <button className={styles['counter-btn']} onClick={decrement}>
        -
      </button>
      <span className={styles['count']}>{count}</span>
      <button className={styles['counter-btn']} onClick={increment}>
        +
      </button>
    </span>
  );
};
