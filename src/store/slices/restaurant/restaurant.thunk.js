import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllRestaurants, getRestaurantById } from 'src/api/restaurant';

export const loadAllRestaurants = createAsyncThunk(
  'restaurant/loadAllRestaurants',
  async (_, { rejectWithValue, getState }) => {
    const { restaurantSlice } = getState();
    if (restaurantSlice.ids.length) return;

    try {
      const data = await getAllRestaurants();
      if (!data?.length) return rejectWithValue('No data');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadRestaurantById = createAsyncThunk(
  'restaurant/loadRestaurantById',
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
