import './App.css';

import { restaurants } from 'materials/mock';
import { useState } from 'react';
import { Layout } from 'src/components/Layout/Layout';
import { NavigationBar } from 'src/components/NavigationBar/NavigationBar';
import { Restaurant } from 'src/components/Restaurant/Restaurant';
import { keyBy } from 'src/utils/helpers';

const restaurantsById = keyBy(restaurants);

export const App = () => {
  const [restaurantId, setRestaurantId] = useState(restaurants[0].id || '');

  return (
    <Layout>
      <NavigationBar items={restaurants} onButtonClick={setRestaurantId} />
      <Restaurant restaurant={restaurantsById[restaurantId]} />
    </Layout>
  );
}
