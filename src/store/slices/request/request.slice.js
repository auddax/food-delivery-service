import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from 'src/constants';

export const requestSlice = createSlice({
  name: 'requestSlice',
  initialState: {},
  selectors: {
    selectRequestStatus: (state, requestId) =>
      state[requestId]?.status || REQUEST_STATUS.IDLE,
    selectRequestError: (state, requestId) => state[requestId]?.error || null,
    selectIsLoading: (state, requestId) =>
      state[requestId]?.status === REQUEST_STATUS.PENDING,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({ type }) => type.endsWith('pending'),
        (state, { meta }) => {
          state[meta.requestId] = {
            status: REQUEST_STATUS.PENDING,
          };
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('fulfilled'),
        (state, { meta }) => {
          state[meta.requestId] = {
            status: REQUEST_STATUS.FULFILLED,
          };
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('rejected'),
        (state, { meta, payload }) => {
          state[meta.requestId] = {
            error: { message: payload },
            status: REQUEST_STATUS.REJECTED,
          };
        }
      );
  },
});

export const { selectIsLoading, selectRequestError, selectRequestStatus } =
  requestSlice.selectors;
