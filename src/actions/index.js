'use server';

import { revalidatePath } from 'next/cache';
import { makeRequest } from 'src/services';

const addReviewAction = async ({ restaurantId, review, pathname }) => {
  const result = await makeRequest(`review/${restaurantId}`, {
    method: 'POST',
    body: JSON.stringify(review),
    headers: { 'Content-Type': 'application/json' },
  });
  revalidatePath(pathname);
  return result.data;
};

const editReviewAction = async ({ reviewId, review, pathname }) => {
  const result = await makeRequest(`review/${reviewId}`, {
    method: 'PATCH',
    body: JSON.stringify(review),
    headers: { 'Content-Type': 'application/json' },
  });
  revalidatePath(pathname);
  return result.data;
};

export const submitFormAction = async (state, formData) => {
  const { userId, restaurantId, pathname, review: currentUserReview } = state;

  if (formData === null) return { ...state, name: '', review: {} };

  const text = formData.get('text');
  const rating = formData.get('rating');
  const review = { text, rating, userId };

  if (currentUserReview) {
    await editReviewAction({
      reviewId: currentUserReview.id,
      review,
      pathname,
    });
  }

  if (!currentUserReview) {
    await addReviewAction({ restaurantId, review, pathname });
  }

  return { ...state, review };
};
