import './App.scss';

import { Layout } from 'src/components/Layout/Layout';
import { Restaurants } from 'src/components/Restaurants/Restaurants';
import { ButtonThemeContextProvider } from 'src/contexts/ButtonThemeContext/ButtonThemeContextProvider';
import { UserContextProvider } from 'src/contexts/UserContext/UserContexProvider';

export const App = () => {
  return (
    <UserContextProvider>
      <ButtonThemeContextProvider>
        <Layout>
          <Restaurants />
        </Layout>
      </ButtonThemeContextProvider>
    </UserContextProvider>
  );
};
