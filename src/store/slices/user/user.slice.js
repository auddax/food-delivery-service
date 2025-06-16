import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { loadAllUsers } from 'src/store/slices/user/user.thunk';

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(loadAllUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    });
  },
});

const selectUserSlice = (state) => state[userSlice.name];

export const { selectIds: selectUserIds, selectById: selectUserById } =
  entityAdapter.getSelectors(selectUserSlice);
