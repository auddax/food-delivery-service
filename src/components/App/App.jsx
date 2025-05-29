import './App.scss';

import { Layout } from 'src/components/Layout/Layout';
import { Restaurants } from 'src/components/Restaurants/Restaurants';

export const App = () => {
  return (
    <>
      <Layout>
        <Restaurants />
      </Layout>
    </>
  );
};
