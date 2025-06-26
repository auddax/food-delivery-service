import classnames from 'classnames';
import Link from 'next/link';

import styles from './NavigationLink.module.scss';

export const NavigationLink = ({ path, className, children }) => (
  <Link className={classnames(styles.navLink, className)} href={path}>
    {children}
  </Link>
);
