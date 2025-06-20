import { useContext, useEffect } from 'react';
import { Button } from 'src/components/Button/Button';
import { FormItem } from 'src/components/FormItem/FormItem';
import { RatingCounter } from 'src/components/ReviewForm/RatingCounter';
import { Title } from 'src/components/Title/Title';
import { RATING_COUNTER } from 'src/constants';
import { UserContext } from 'src/contexts/UserContext/UserContext';
import { useForm } from 'src/hooks/useForm';

import styles from './ReviewForm.module.scss';

export const ReviewForm = ({ review, onSubmitForm, isSubmitDisabled }) => {
  const { user } = useContext(UserContext);
  const { form, onNameChange, onReviewChange, onRatingChange, setForm, clear } =
    useForm();

  useEffect(() => {
    if (!review || !user) return;
    setForm({
      name: user.userInfo.name,
      ...review,
    });
  }, [review, setForm, user]);

  if (!user?.isAuthorized) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { text, rating } = form;
    const { userInfo } = user;
    onSubmitForm({
      userId: userInfo.id,
      text,
      rating,
    });
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
            name='text'
            value={form.text}
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
          <Button type='button' onClick={clear}>
            Очистить форму
          </Button>
          <Button disabled={isSubmitDisabled} type='submit'>
            Отправить
          </Button>
        </div>
      </form>
    </div>
  );
};
