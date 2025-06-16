import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUsers } from 'src/api/user';
import { selectUserIds } from 'src/store/slices/user/user.slice';

export const loadAllUsers = createAsyncThunk(
  'restaurant/loadAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllUsers();
      if (!data?.length) return rejectWithValue('No data');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      return selectUserIds(getState()).length === 0;
    },
  }
);
