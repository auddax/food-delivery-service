import styles from './Counter.module.scss';

export const Counter = ({ count, increment, decrement }) => (
  <span className={styles.counter}>
    <button className={styles.counterBtn} onClick={decrement}>
      -
    </button>
    <span className={styles.count}>{count}</span>
    <button className={styles.counterBtn} onClick={increment}>
      +
    </button>
  </span>
);
