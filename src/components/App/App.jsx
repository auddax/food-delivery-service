import './App.scss';

import { Layout } from 'src/components/Layout/Layout';
import { Restaurants } from 'src/components/Restaurants/Restaurants';
import { ScrollProgressBar } from 'src/components/ScrollProgressBar/ScrollProgressBar';

export const App = () => {
  return (
    <>
      <ScrollProgressBar />
      <Layout>
        <Restaurants />
      </Layout>
    </>
  );
};
