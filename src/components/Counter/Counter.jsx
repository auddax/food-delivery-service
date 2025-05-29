import styles from './Counter.module.scss';

export const Counter = ({ count, increment, decrement }) => (
  <span className={styles['counter']}>
    <button className={styles['counter-btn']} onClick={decrement}>
      -
    </button>
    <span className={styles['count']}>{count}</span>
    <button className={styles['counter-btn']} onClick={increment}>
      +
    </button>
  </span>
);
