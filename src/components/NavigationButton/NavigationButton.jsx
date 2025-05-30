import styles from './NavigationButton.module.scss';

export const NavigationButton = ({ title, handleClick }) => {
  if (!title) {
    return null;
  }
  return (
    <button className={styles.navBtn} onClick={handleClick}>
      {title}
    </button>
  );
};
