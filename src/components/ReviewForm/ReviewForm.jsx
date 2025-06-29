'use client';

import { usePathname } from 'next/navigation';
import { useActionState, useContext, useRef } from 'react';
import { submitFormAction } from 'src/actions';
import { Button } from 'src/components/Button/Button';
import { FormItem } from 'src/components/FormItem/FormItem';
import { RatingCounter } from 'src/components/ReviewForm/RatingCounter';
import { Title } from 'src/components/Title/Title';
import { RATING_COUNTER } from 'src/constants';
import { UserContext } from 'src/contexts/UserContext/UserContext';

import styles from './ReviewForm.module.scss';

export const ReviewForm = ({ reviewsByUserId, restaurantId }) => {
  const { user } = useContext(UserContext);
  const pathname = usePathname();
  const counterRef = useRef();
  const [state, submitAction, isPending] = useActionState(submitFormAction, {
    restaurantId,
    pathname,
    userId: user?.userInfo?.id,
    name: user?.userInfo?.name,
    review: reviewsByUserId[user?.userInfo?.id],
  });

  if (!user?.isAuthorized) return null;

  return (
    <div className={styles.reviewForm}>
      <Title level={3} value='Оставить отзыв' className={styles.formTitle} />
      <form action={submitAction}>
        <FormItem label='Имя:'>
          <input
            type='text'
            name='name'
            defaultValue={state.name}
            className={styles.formInput}
          />
        </FormItem>
        <FormItem label='Текст:'>
          <textarea
            type='text'
            name='text'
            defaultValue={state.review?.text}
            className={styles.formInput}
          />
        </FormItem>
        <FormItem label='Рейтинг:'>
          <RatingCounter
            name='rating'
            ref={counterRef}
            defaultValue={state.review?.rating}
            minValue={RATING_COUNTER.minValue}
            maxValue={RATING_COUNTER.maxValue}
          />
        </FormItem>
        <div className={styles.formActions}>
          <Button type='submit' formAction={() => submitAction(null)}>
            Очистить форму
          </Button>
          <Button type='submit' disabled={isPending}>
            Отправить
          </Button>
        </div>
      </form>
    </div>
  );
};
