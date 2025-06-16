import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDishById, getDishesByRestaurantId } from 'src/api/dish';
import { selectDishById } from 'src/store/slices/dish/dish.slice';

export const loadDishesByRestaurantId = createAsyncThunk(
  'restaurant/loadDishesByRestaurantId',
  async (id, { rejectWithValue }) => {
    try {
      const data = await getDishesByRestaurantId(id);
      if (!data) return rejectWithValue('No data');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadDishDetail = createAsyncThunk(
  'restaurant/loadDishDetail',
  async (id, { rejectWithValue }) => {
    try {
      const data = await getDishById(id);
      if (!data) return rejectWithValue('No data');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (id, { getState }) => {
      return !selectDishById(getState(), id);
    },
  }
);
