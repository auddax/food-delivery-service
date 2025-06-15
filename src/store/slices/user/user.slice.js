import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from 'src/constants';
import { loadAllUsers } from 'src/store/slices/user/user.thunk';
import { keyBy } from 'src/utils/helpers';

const initialState = {
  ids: [],
  users: {},
  requestStatus: REQUEST_STATUS.IDLE,
  error: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  selectors: {
    selectUserIds: (state) => state.ids,
    selectUserById: (state, id) => state.users[id],
    selectRequestStatus: (state) => state.requestStatus,
    selectError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllUsers.pending, (state) => {
        state.requestStatus = REQUEST_STATUS.PENDING;
      })
      .addCase(loadAllUsers.fulfilled, (state, { payload }) => {
        if (!payload) return;

        state.ids = payload?.map(({ id }) => id);
        state.users = keyBy(payload);
        state.requestStatus = REQUEST_STATUS.FULFILLED;
      })
      .addCase(loadAllUsers.rejected, (state, { payload }) => {
        state.error = {
          message: payload,
        };
        state.requestStatus = REQUEST_STATUS.REJECTED;
      });
  },
});

export const {
  selectUserIds,
  selectUserById,
  selectError,
  selectRequestStatus,
} = userSlice.selectors;
