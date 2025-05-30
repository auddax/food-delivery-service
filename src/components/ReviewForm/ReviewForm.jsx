import { FormItem } from 'src/components/FormItem/FormItem';
import { RatingCounter } from 'src/components/ReviewForm/RatingCounter';
import { Title } from 'src/components/Title/Title';
import { RATING_COUNTER } from 'src/constants';
import { useForm } from 'src/hooks/useForm';

import styles from './ReviewForm.module.scss';

export const ReviewForm = () => {
  const { form, onNameChange, onReviewChange, onRatingChange, clear } =
    useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.reviewForm}>
      <Title level={3} value='Оставить отзыв' className={styles.formTitle} />
      <form onSubmit={handleSubmit}>
        <FormItem label='Имя:'>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={onNameChange}
            className={styles.formInput}
          />
        </FormItem>
        <FormItem label='Текст:'>
          <textarea
            type='text'
            name='review'
            value={form.review}
            onChange={onReviewChange}
            className={styles.formInput}
          />
        </FormItem>
        <FormItem label='Рейтинг:'>
          <RatingCounter
            name='rating'
            value={form.rating}
            onChange={onRatingChange}
            minValue={RATING_COUNTER.minValue}
            maxValue={RATING_COUNTER.maxValue}
          />
        </FormItem>
        <div className={styles.formActions}>
          <button type='button' onClick={clear} className={styles.formBtn}>
            Очистить форму
          </button>
          <button type='submit' className={styles.formBtn}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};
