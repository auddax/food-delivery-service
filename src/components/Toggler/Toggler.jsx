import styles from './Toggler.module.scss';

export const Toggler = ({ onChange }) => (
  <label className={styles.toggler}>
    <input onChange={onChange} type='checkbox' className={styles.checkbox} />
    <span className={styles.switch}></span>
  </label>
);
