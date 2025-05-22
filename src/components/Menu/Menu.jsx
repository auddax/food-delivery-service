import { MenuItem } from 'src/components/MenuItem/MenuItem';

import styles from './Menu.module.scss';

export const Menu = ({ menu }) => (
  <div className={styles['menu']}>
    <h3>Meню</h3>
    <ul>
      {menu?.map(({ id, ...restProps }) => (
        <MenuItem key={id} {...restProps} />
      ))}
    </ul>
  </div>
);
