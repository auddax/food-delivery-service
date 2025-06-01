import classnames from 'classnames';

import styles from './Button.module.scss';

export const Button = ({ type, onClick, className, children }) => (
  <button
    type={type}
    onClick={onClick}
    className={classnames(styles.btn, styles[className])}
  >
    {children}
  </button>
);
