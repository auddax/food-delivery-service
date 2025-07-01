'use client';

import { useState } from 'react';
import { Counter } from 'src/components/Counter/Counter';

export const RatingCounter = ({
  defaultValue,
  minValue,
  maxValue,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue || minValue);

  const incrementCount = () => {
    if (value < maxValue) setValue(value + 1);
  };
  const decrementCount = () => {
    if (value > minValue) setValue(value - 1);
  };
  return (
    <Counter
      count={value}
      increment={incrementCount}
      decrement={decrementCount}
      {...props}
    />
  );
};
