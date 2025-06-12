import { Outlet, useParams } from 'react-router';
import { RestaurantDetail } from 'src/components/RestaurantDetail/RestaurantDetail';

export const RestaurantDetailPage = () => {
  const { restaurantId } = useParams();

  return (
    <>
      <RestaurantDetail restaurantId={restaurantId} />
      <Outlet />
    </>
  );
};
