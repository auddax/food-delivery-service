import classnames from 'classnames';
import { useContext } from 'react';
import { ButtonThemeContext } from 'src/contexts/ButtonThemeContext/ButtonThemeContext';

import styles from './Button.module.scss';

export const Button = ({ className, children, ...props }) => {
  const { theme } = useContext(ButtonThemeContext);

  return (
    <button
      className={classnames(styles.btn, styles[theme], className)}
      {...props}
    >
      {children}
    </button>
  );
};
