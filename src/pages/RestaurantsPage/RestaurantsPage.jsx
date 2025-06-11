import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { RestaurantsBar } from 'src/components/RestaurantsBar/RestaurantsBar';
import { selectRestaurantIds } from 'src/store/slices/restaurant/restaurant.slice';

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <>
      <RestaurantsBar items={restaurantIds} />
      <Outlet />
    </>
  );
};
