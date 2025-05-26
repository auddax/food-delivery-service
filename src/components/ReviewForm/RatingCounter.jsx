import { Counter } from 'src/components/Counter/Counter';

export const RatingCounter = ({ value, onChange, minValue, maxValue }) => {
  const incrementCount = () => {
    if (value < maxValue) onChange(value + 1);
  };
  const decrementCount = () => {
    if (value > minValue) onChange(value - 1);
  };
  return (
    <Counter
      count={value}
      increment={incrementCount}
      decrement={decrementCount}
    />
  );
};
