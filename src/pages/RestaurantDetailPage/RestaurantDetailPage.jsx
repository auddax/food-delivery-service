import { Outlet, useParams } from 'react-router';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { RestaurantDetail } from 'src/components/RestaurantDetail/RestaurantDetail';
import { useRequest } from 'src/hooks/useRequest';
import { loadRestaurantDetail } from 'src/store/slices/restaurant/restaurant.thunk';

export const RestaurantDetailPage = () => {
  const { restaurantId } = useParams();
  const { isLoading, error } = useRequest(loadRestaurantDetail, restaurantId);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <>
      <RestaurantDetail restaurantId={restaurantId} />
      <Outlet />
    </>
  );
};
