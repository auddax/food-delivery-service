import { useParams } from 'react-router';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { Menu } from 'src/components/Menu/Menu';
import { useRequest } from 'src/hooks/useRequest';
import { loadDishesByRestaurantId } from 'src/store/slices/dish/dish.thunk';

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const { isLoading, error } = useRequest(
    loadDishesByRestaurantId,
    restaurantId
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return <Menu restaurantId={restaurantId} />;
};
