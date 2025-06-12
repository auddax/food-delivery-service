import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'src/components/Button/Button';

import styles from './DeleteButton.module.scss';

export const DeleteButton = ({ onClick }) => (
  <Button onClick={onClick} className={styles.deleteBtn}>
    <DeleteOutlined />
  </Button>
);
