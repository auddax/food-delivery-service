import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUsers } from 'src/api/user';

export const loadAllUsers = createAsyncThunk(
  'restaurant/loadAllUsers',
  async (_, { rejectWithValue, getState }) => {
    const { userSlice } = getState();
    if (userSlice.ids.length) return;

    try {
      const data = await getAllUsers();
      if (!data?.length) return rejectWithValue('No data');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
