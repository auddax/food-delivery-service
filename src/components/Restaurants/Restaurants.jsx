import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigationBar } from 'src/components/NavigationBar/NavigationBar';
import { RestaurantDetail } from 'src/components/RestaurantDetail/RestaurantDetail';
import { selectRestaurantIds } from 'src/store/slices/restaurant/restaurant.slice';

export const Restaurants = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [restaurantId, setRestaurantId] = useState(restaurantIds[0] || '');

  return (
    <>
      <NavigationBar items={restaurantIds} onButtonClick={setRestaurantId} />
      <RestaurantDetail restaurantId={restaurantId} />
    </>
  );
};
