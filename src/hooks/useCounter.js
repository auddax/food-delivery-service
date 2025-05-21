import { useState } from 'react'

export const useCounter = (initialValue = 0, minValue = 0, maxValue = 5) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => {
    if (count < maxValue) setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > minValue) setCount(count - 1);
  };

  return [count, incrementCount, decrementCount];
}
