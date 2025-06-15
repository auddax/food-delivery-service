import { createSlice } from '@reduxjs/toolkit';
import { loadAllUsers } from 'src/store/slices/user/user.thunk';
import { keyBy } from 'src/utils/helpers';

const initialState = {
  ids: [],
  users: {},
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  selectors: {
    selectUserIds: (state) => state.ids,
    selectUserById: (state, id) => state.users[id],
  },
  extraReducers: (builder) => {
    builder.addCase(loadAllUsers.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.ids = payload?.map(({ id }) => id);
      state.users = keyBy(payload);
    });
  },
});

export const { selectUserIds, selectUserById } = userSlice.selectors;
