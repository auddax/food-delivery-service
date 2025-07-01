import classnames from 'classnames';
import { useContext } from 'react';
import { ButtonThemeContext } from 'src/contexts/ButtonThemeContext/ButtonThemeContext';

import styles from './Counter.module.scss';

export const Counter = ({ count, increment, decrement, ...props }) => {
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
      <input
        value={count}
        className={classnames(styles.count, styles[theme])}
        readOnly
        {...props}
      />
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
