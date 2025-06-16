import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { loadReviewsByRestaurantId } from 'src/store/slices/review/review.thunk';

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(
      loadReviewsByRestaurantId.fulfilled,
      (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      }
    );
  },
});

const selectReviewSlice = (state) => state[reviewSlice.name];

export const { selectIds: selectReveiwIds, selectById: selectReviewById } =
  entityAdapter.getSelectors(selectReviewSlice);
