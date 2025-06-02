import classnames from 'classnames';
import { useContext } from 'react';
import { ButtonThemeContext } from 'src/contexts/ButtonThemeContext/ButtonThemeContext';

import styles from './Button.module.scss';

export const Button = ({ type, onClick, className, children }) => {
  const { theme } = useContext(ButtonThemeContext);

  return (
    <button
      type={type}
      onClick={onClick}
      className={classnames(styles.btn, styles[theme], styles[className])}
    >
      {children}
    </button>
  );
};
