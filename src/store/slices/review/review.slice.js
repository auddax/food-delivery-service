import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from 'materials/normalized-mock';
import { keyBy } from 'src/utils/helpers';

const initialState = {
  ids: normalizedReviews?.map(({ id }) => id),
  reviews: keyBy(normalizedReviews),
};

export const reviewSlice = createSlice({
  name: 'reviwSlice',
  initialState,
  selectors: {
    selectReveiwIds: (state) => state.ids,
    selectReviewById: (state, id) => state.reviews[id],
  },
});

export const { selectReveiwIds, selectReviewById } = reviewSlice.selectors;
