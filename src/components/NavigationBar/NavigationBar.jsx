import classnames from 'classnames';

import styles from './NavigationBar.module.scss';

export const NavigationBar = ({ children, className }) => (
  <div className={classnames(styles.navBar, className)}>{children}</div>
);
