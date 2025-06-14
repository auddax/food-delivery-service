import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from 'src/constants';
import { loadRestaurantDetail } from 'src/store/slices/restaurantDetail/restaurantDetail.thunk';

const initialState = {
  restaurant: {},
  requestStatus: REQUEST_STATUS.IDLE,
  error: null,
};

export const restaurantDetailSlice = createSlice({
  name: 'restaurantDetailSlice',
  initialState,
  selectors: {
    selectRestaurant: (state) => state.restaurant,
    selectRequestStatus: (state) => state.requestStatus,
    selectError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRestaurantDetail.pending, (state) => {
        state.requestStatus = REQUEST_STATUS.PENDING;
      })
      .addCase(loadRestaurantDetail.fulfilled, (state, { payload }) => {
        if (!payload) return;

        state.restaurant = payload
        state.requestStatus = REQUEST_STATUS.FULFILLED;
      })
      .addCase(loadRestaurantDetail.rejected, (state, { payload }) => {
        state.error = {
          message: payload,
        };
        state.requestStatus = REQUEST_STATUS.REJECTED;
      })
  },
});

export const {
  selectRestaurant,
  selectRequestStatus,
  selectError,
} = restaurantDetailSlice.selectors;
