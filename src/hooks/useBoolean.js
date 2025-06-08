import { useState } from 'react';

export const useBoolean = (initailState = false) => {
  const [isTrue, setIsTrue] = useState(initailState);

  const setTrue = () => setIsTrue(true);
  const setFalse = () => setIsTrue(false);
  const toggle = () => setIsTrue((isTrue) => !isTrue);

  return [isTrue, { setTrue, setFalse, toggle }];
};
