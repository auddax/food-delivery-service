import { Title } from 'src/components/Title/Title';

import styles from './ErrorMessage.module.scss';

export const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return (
    <div className={styles.errorMessage}>
      <Title level={3} value='Ошибка загрузки данных' />
      <div dangerouslySetInnerHTML={{ __html: message }} />
    </div>
  );
};
