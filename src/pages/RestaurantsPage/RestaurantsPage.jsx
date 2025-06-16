import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { RestaurantsBar } from 'src/components/RestaurantsBar/RestaurantsBar';
import { useRequest } from 'src/hooks/useRequest';
import { selectRestaurantIds } from 'src/store/slices/restaurant/restaurant.slice';
import { loadAllRestaurants } from 'src/store/slices/restaurant/restaurant.thunk';

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const { isLoading, error } = useRequest(loadAllRestaurants);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <>
      <RestaurantsBar items={restaurantIds} />
      <Outlet />
    </>
  );
};
