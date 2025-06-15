import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from 'src/constants';
import { loadAllRestaurants } from 'src/store/slices/restaurant/restaurant.thunk';
import { keyBy } from 'src/utils/helpers';

const initialState = {
  ids: [],
  restaurants: {},
  requestStatus: REQUEST_STATUS.IDLE,
  error: null,
};

export const restaurantSlice = createSlice({
  name: 'restaurantSlice',
  initialState,
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.restaurants[id],
    selectRequestStatus: (state) => state.requestStatus,
    selectError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllRestaurants.pending, (state) => {
        state.requestStatus = REQUEST_STATUS.PENDING;
      })
      .addCase(loadAllRestaurants.fulfilled, (state, { payload }) => {
        if (!payload) return;

        state.ids = payload?.map(({ id }) => id);
        state.restaurants = keyBy(payload);
        state.requestStatus = REQUEST_STATUS.FULFILLED;
      })
      .addCase(loadAllRestaurants.rejected, (state, { payload }) => {
        state.error = {
          message: payload,
        };
        state.requestStatus = REQUEST_STATUS.REJECTED;
      });
  },
});

export const {
  selectRestaurantIds,
  selectRequestStatus,
  selectError,
  selectRestaurantById,
} = restaurantSlice.selectors;
