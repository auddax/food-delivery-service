import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from 'src/constants';
import { loadReviewsByRestaurantId } from 'src/store/slices/review/review.thunk';
import { keyBy } from 'src/utils/helpers';

const initialState = {
  ids: [],
  reviews: {},
  requestStatus: REQUEST_STATUS.IDLE,
  error: null,
};

export const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState,
  selectors: {
    selectReveiwIds: (state) => state.ids,
    selectReviewById: (state, id) => state.reviews[id],
    selectRequestStatus: (state) => state.requestStatus,
    selectError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadReviewsByRestaurantId.pending, (state) => {
        state.requestStatus = REQUEST_STATUS.PENDING;
      })
      .addCase(loadReviewsByRestaurantId.fulfilled, (state, { payload }) => {
        if (!payload) return;

        state.ids = payload?.map(({ id }) => id);
        state.reviews = keyBy(payload);
        state.requestStatus = REQUEST_STATUS.FULFILLED;
      })
      .addCase(loadReviewsByRestaurantId.rejected, (state, { payload }) => {
        state.error = {
          message: payload,
        };
        state.requestStatus = REQUEST_STATUS.REJECTED;
      });
  },
});

export const {
  selectReveiwIds,
  selectReviewById,
  selectRequestStatus,
  selectError,
} = reviewSlice.selectors;
