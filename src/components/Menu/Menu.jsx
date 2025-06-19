import { MenuItem } from 'src/components/MenuItem/MenuItem';
import { Title } from 'src/components/Title/Title';

import styles from './Menu.module.scss';

export const Menu = ({ menu }) => {
  if (!menu?.length) return null;

  console.log(menu);

  return (
    <div className={styles.menu}>
      <Title level={3} value='Меню' className={styles.menuTitle} />
      <ul>
        {menu.map(({ id, name }) => (
          <MenuItem key={id} id={id} name={name} />
        ))}
      </ul>
    </div>
  );
};
