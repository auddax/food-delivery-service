import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllRestaurants, getRestaurantById } from 'src/api/restaurant';
import { selectRestaurantIds } from 'src/store/slices/restaurant/restaurant.slice';

export const loadAllRestaurants = createAsyncThunk(
  'restaurant/loadAllRestaurants',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllRestaurants();
      if (!data?.length) return rejectWithValue('No data');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      return selectRestaurantIds(getState()).length === 0;
    },
  }
);

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
