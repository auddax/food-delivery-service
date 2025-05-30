import styles from './FormItem.module.scss';

export const FormItem = ({ label, children }) => (
  <div className={styles.formItem}>
    <label>
      <div className={styles.label}>{label}</div>
      {children}
    </label>
  </div>
);
