import classnames from 'classnames';
import { useContext } from 'react';
import { ButtonThemeContext } from 'src/contexts/ButtonThemeContext/ButtonThemeContext';

import styles from './Counter.module.scss';

export const Counter = ({ count, increment, decrement }) => {
  const { theme } = useContext(ButtonThemeContext);

  return (
    <span className={classnames(styles.counter, styles[theme])}>
      <button
        type='button'
        className={classnames(styles.counterBtn, styles[theme])}
        onClick={decrement}
      >
        -
      </button>
      <span className={classnames(styles.count, styles[theme])}>{count}</span>
      <button
        type='button'
        className={classnames(styles.counterBtn, styles[theme])}
        onClick={increment}
      >
        +
      </button>
    </span>
  );
};
