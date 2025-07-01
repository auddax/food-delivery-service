import 'src/components/App/App.scss';

import { Layout } from 'src/components/Layout/Layout';
import { ButtonThemeContextProvider } from 'src/contexts/ButtonThemeContext/ButtonThemeContextProvider';
import { UserContextProvider } from 'src/contexts/UserContext/UserContexProvider';
import { StoreProvider } from 'src/store/provider';

const AppLayout = ({ children }) => (
  <StoreProvider>
    <UserContextProvider>
      <ButtonThemeContextProvider>
        <Layout>{children}</Layout>
      </ButtonThemeContextProvider>
    </UserContextProvider>
  </StoreProvider>
);

export default AppLayout;
