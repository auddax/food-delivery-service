import { Title } from 'src/components/Title/Title';

import styles from './ErrorMessage.module.scss';

export const ErrorMessage = ({ message }) => (
  <div className={styles.errorMessage}>
    <Title level={3} value='Ошибка загрузки данных' />
    <div>{message}</div>
  </div>
);
