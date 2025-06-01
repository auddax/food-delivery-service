import './App.scss';

import { Layout } from 'src/components/Layout/Layout';
import { Restaurants } from 'src/components/Restaurants/Restaurants';
import { ButtonThemeContextProvider } from 'src/contexts/ButtonThemeContext/ButtonThemeContextProvider';

export const App = () => {
  return (
    <ButtonThemeContextProvider>
      <Layout>
        <Restaurants />
      </Layout>
    </ButtonThemeContextProvider>
  );
};
