'use client';

import { useScroll } from 'src/hooks/useScroll';

import styles from './ScrollProgressBar.module.scss';

export const ScrollProgressBar = () => {
  const scrollPercent = useScroll();

  return (
    <div
      className={styles.scrollProgressBar}
      style={{ width: `${scrollPercent}%` }}
    ></div>
  );
};
