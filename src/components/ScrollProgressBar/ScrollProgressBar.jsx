import { useScroll } from 'src/hooks/useScroll';

import styles from './ScrollProgressBar.module.scss';

export const ScrollProgressBar = () => {
  const scrollPercent = useScroll();

  return (
    <div
      className={styles['scroll-progress-bar']}
      style={{ width: `${scrollPercent}%` }}
    ></div>
  );
}
