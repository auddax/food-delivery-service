import { createSelector, createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) return;
      state[payload] = state[payload] - 1;

      if (state[payload] === 0) delete state[payload];
    },
  },
  selectors: {
    selectItemAmountById: (state, id) => state[id] || 0,
  },
});

const selectCartSlice = (state) => state[cartSlice.name];

export const selectCartItems = createSelector([selectCartSlice], (cartSlice) =>
  Object.keys(cartSlice)
);

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectItemAmountById } = cartSlice.selectors;
