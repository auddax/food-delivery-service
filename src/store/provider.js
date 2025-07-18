'use client';

import { Provider } from 'react-redux';
import { store } from 'src/store/store';

export const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
