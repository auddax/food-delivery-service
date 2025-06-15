import { createSlice } from '@reduxjs/toolkit';
import { loadReviewsByRestaurantId } from 'src/store/slices/review/review.thunk';
import { keyBy } from 'src/utils/helpers';

const initialState = {
  ids: [],
  reviews: {},
};

export const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState,
  selectors: {
    selectReveiwIds: (state) => state.ids,
    selectReviewById: (state, id) => state.reviews[id],
  },
  extraReducers: (builder) => {
    builder.addCase(
      loadReviewsByRestaurantId.fulfilled,
      (state, { payload }) => {
        if (!payload) return;

        state.ids = payload?.map(({ id }) => id);
        state.reviews = keyBy(payload);
      }
    );
  },
});

export const { selectReveiwIds, selectReviewById } = reviewSlice.selectors;
