import { createSlice } from '@reduxjs/toolkit';
import {
  loadDishDetail,
  loadDishesByRestaurantId,
} from 'src/store/slices/dish/dish.thunk';
import { keyBy } from 'src/utils/helpers';

const initialState = {
  ids: [],
  dishes: {},
};

export const dishSlice = createSlice({
  name: 'dishSlice',
  initialState,
  selectors: {
    selectDishIds: (state) => state.ids,
    selectDishById: (state, id) => state.dishes[id],
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDishesByRestaurantId.fulfilled, (state, { payload }) => {
        if (!payload) return;

        state.ids = payload?.map(({ id }) => id);
        state.dishes = keyBy(payload);
      })
      .addCase(loadDishDetail.fulfilled, (state, { payload }) => {
        if (!payload) return;

        state[payload.id] = payload;
      });
  },
});

export const { selectDishIds, selectDishById } = dishSlice.selectors;
