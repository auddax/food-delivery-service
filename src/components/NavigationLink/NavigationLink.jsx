import classnames from 'classnames';
import { Link } from 'react-router';

import styles from './NavigationLink.module.scss';

export const NavigationLink = ({ path, className, children }) => (
  <Link className={classnames(styles.navLink, className)} to={path}>
    {children}
  </Link>
);
