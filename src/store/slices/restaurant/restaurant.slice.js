import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from 'materials/normalized-mock';
import { keyBy } from 'src/utils/helpers';

const initialState = {
  ids: normalizedRestaurants?.map(({ id }) => id),
  restaurants: keyBy(normalizedRestaurants),
};

export const restaurantSlice = createSlice({
  name: 'restaurantSlice',
  initialState,
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.restaurants[id],
  },
});

export const { selectRestaurantIds, selectRestaurantById } =
  restaurantSlice.selectors;
