'use client';

import 'src/components/App/App.scss';

import { Provider } from 'react-redux';
import { Layout } from 'src/components/Layout/Layout';
import { ButtonThemeContextProvider } from 'src/contexts/ButtonThemeContext/ButtonThemeContextProvider';
import { UserContextProvider } from 'src/contexts/UserContext/UserContexProvider';
import { store } from 'src/store/store';

const AppLayout = ({ children }) => (
  <Provider store={store}>
    <UserContextProvider>
      <ButtonThemeContextProvider>
        <Layout>{children}</Layout>
      </ButtonThemeContextProvider>
    </UserContextProvider>
  </Provider>
);

export default AppLayout;
