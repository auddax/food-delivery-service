import { restaurants } from 'materials/mock';
import { useState } from 'react';
import { NavigationBar } from 'src/components/NavigationBar/NavigationBar';
import { RestaurantDetail } from 'src/components/RestaurantDetail/RestaurantDetail';
import { keyBy } from 'src/utils/helpers';

const restaurantsById = keyBy(restaurants);

export const Restaurants = () => {
  const [restaurantId, setRestaurantId] = useState(restaurants[0].id || '');

  return (
    <>
      <NavigationBar items={restaurants} onButtonClick={setRestaurantId} />
      <RestaurantDetail restaurant={restaurantsById[restaurantId]} />
    </>
  );
};
