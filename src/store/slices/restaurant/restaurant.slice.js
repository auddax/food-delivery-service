import { createSlice } from '@reduxjs/toolkit';
import {
  loadAllRestaurants,
  loadRestaurantDetail,
} from 'src/store/slices/restaurant/restaurant.thunk';
import { keyBy } from 'src/utils/helpers';

const initialState = {
  ids: [],
  restaurants: {},
};

export const restaurantSlice = createSlice({
  name: 'restaurantSlice',
  initialState,
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.restaurants[id],
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllRestaurants.fulfilled, (state, { payload }) => {
        if (!payload) return;

        state.ids = payload?.map(({ id }) => id);
        state.restaurants = keyBy(payload);
      })
      .addCase(loadRestaurantDetail.fulfilled, (state, { payload }) => {
        if (!payload) return;

        state[payload.id] = payload;
      });
  },
});

export const { selectRestaurantIds, selectRestaurantById } =
  restaurantSlice.selectors;
