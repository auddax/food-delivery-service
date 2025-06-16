import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {
  loadDishDetail,
  loadDishesByRestaurantId,
} from 'src/store/slices/dish/dish.thunk';

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: 'dishSlice',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(loadDishesByRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(loadDishDetail.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      });
  },
});

const selectDishSlice = (state) => state[dishSlice.name];

export const { selectIds: selectDishIds, selectById: selectDishById } =
  entityAdapter.getSelectors(selectDishSlice);
