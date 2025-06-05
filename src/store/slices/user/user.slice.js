import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from 'materials/normalized-mock';
import { keyBy } from 'src/utils/helpers';

const initialState = {
  ids: normalizedUsers?.map(({ id }) => id),
  users: keyBy(normalizedUsers),
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  selectors: {
    selectUserIds: (state) => state.ids,
    selectUserById: (state, id) => state.users[id],
  },
});

export const { selectUserIds, selectUserById } = userSlice.selectors;
