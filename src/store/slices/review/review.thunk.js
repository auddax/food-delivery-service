import { createAsyncThunk } from '@reduxjs/toolkit';
import { getReviewsByRestaurantId } from 'src/api/review';

export const loadReviewsByRestaurantId = createAsyncThunk(
  'restaurant/loadReviewsByRestaurantId',
  async (id, { rejectWithValue }) => {
    try {
      const data = await getReviewsByRestaurantId(id);
      if (!data) return rejectWithValue('No data');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
