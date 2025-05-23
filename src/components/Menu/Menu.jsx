import { MenuItem } from 'src/components/MenuItem/MenuItem';
import { Title } from 'src/components/Title/Title';

import styles from './Menu.module.scss';

export const Menu = ({ menu }) => {
  if (!menu?.length) return null;

  return (
    <div className={styles['menu']}>
      <Title level={3} value='Меню' />
      <ul>
        {menu.map(({ id, ...restProps }) => (
          <MenuItem key={id} {...restProps} />
        ))}
      </ul>
    </div>
  );
};
