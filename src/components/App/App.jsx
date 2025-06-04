import './App.scss';

import { Provider } from 'react-redux';
import { Layout } from 'src/components/Layout/Layout';
import { Restaurants } from 'src/components/Restaurants/Restaurants';
import { ButtonThemeContextProvider } from 'src/contexts/ButtonThemeContext/ButtonThemeContextProvider';
import { UserContextProvider } from 'src/contexts/UserContext/UserContexProvider';
import { store } from 'src/store/store';

export const App = () => (
  <Provider store={store}>
    <UserContextProvider>
      <ButtonThemeContextProvider>
        <Layout>
          <Restaurants />
        </Layout>
      </ButtonThemeContextProvider>
    </UserContextProvider>
  </Provider>
);
