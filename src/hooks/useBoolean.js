'use client';

import { useState } from 'react';

export const useBoolean = (initailState = false) => {
  const [isTrue, setIsTrue] = useState(initailState);

  const open = () => setIsTrue(true);
  const close = () => setIsTrue(false);
  const toggle = () => setIsTrue((isTrue) => !isTrue);

  return [isTrue, { open, close, toggle }];
};
