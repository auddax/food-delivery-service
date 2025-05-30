import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercent(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPercent;
};
