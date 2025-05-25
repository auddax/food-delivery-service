import { Counter } from 'src/components/Counter/Counter';
import { FormItem } from 'src/components/FormItem/FormItem';
import { Title } from 'src/components/Title/Title';
import { RATING_COUNTER } from 'src/constants';
import { useForm } from 'src/hooks/useForm';

import styles from './ReviewForm.module.scss';

const RatingCounter = ({ value, onChange, minValue, maxValue }) => {
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

export const ReviewForm = () => {
  const { form, onNameChange, onReviewChange, onRatingChange, clear } =
    useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className={styles['review-form']}>
      <Title
        level={3}
        value='Оставить отзыв'
        className={styles['form-title']}
      />
      <form onSubmit={handleSubmit}>
        <FormItem label='Имя:'>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={onNameChange}
          />
        </FormItem>
        <FormItem label='Текст:'>
          <textarea
            type='text'
            name='review'
            value={form.review}
            onChange={onReviewChange}
          />
        </FormItem>
        <FormItem label='Рейтинг:'>
          <RatingCounter
            name='rating'
            value={form.rating}
            minValue={RATING_COUNTER.minValue}
            maxValue={RATING_COUNTER.maxValue}
            onChange={onRatingChange}
          />
        </FormItem>
        <div className={styles['form-actions']}>
          <button type='button' onClick={clear}>
            Очистить форму
          </button>
          <button type='submit'>Отправить</button>
        </div>
      </form>
    </div>
  );
};
