import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {
  loadAllRestaurants,
  loadRestaurantDetail,
} from 'src/store/slices/restaurant/restaurant.thunk';

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: 'restaurantSlice',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(loadAllRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(loadRestaurantDetail.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      });
  },
});

const selectRestaurantSlice = (state) => state[restaurantSlice.name];

export const {
  selectIds: selectRestaurantIds,
  selectById: selectRestaurantById,
} = entityAdapter.getSelectors(selectRestaurantSlice);
