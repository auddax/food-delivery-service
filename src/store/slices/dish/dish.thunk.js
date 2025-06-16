import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDishById, getDishesByRestaurantId } from 'src/api/dish';

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
  }
);
