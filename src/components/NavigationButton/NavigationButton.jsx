import styles from './NavigationButton.module.scss';

export const NavigationButton = ({ title, handleClick }) => (
  <button className={styles['nav-btn']} onClick={handleClick}>
    {title}
  </button>
);
