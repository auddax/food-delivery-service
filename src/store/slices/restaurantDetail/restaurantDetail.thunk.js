import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRestaurantById } from 'src/api/restaurant';

export const loadRestaurantDetail = createAsyncThunk(
  'restaurant/loadRestaurantDetail',
  async (id, { rejectWithValue }) => {
    try {
      const data = await getRestaurantById(id);
      if (!data) return rejectWithValue('No data');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
