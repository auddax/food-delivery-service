import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from 'materials/normalized-mock';
import { keyBy } from 'src/utils/helpers';

const initialState = {
  ids: normalizedDishes?.map(({ id }) => id),
  dishes: keyBy(normalizedDishes),
};

export const dishSlice = createSlice({
  name: 'dishSlice',
  initialState,
  selectors: {
    selectDishIds: (state) => state.ids,
    selectDishById: (state, id) => state.dishes[id],
  },
});

export const { selectDishIds, selectDishById } = dishSlice.selectors;
