import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { RestaurantsBar } from 'src/components/RestaurantsBar/RestaurantsBar';
import { getAllRestaurants } from 'src/services';

export const RestaurantsPage = async () => {
  const { data, isError, error } = await getAllRestaurants();

  if (isError) {
    return <ErrorMessage message={error.data} />;
  }

  return <RestaurantsBar items={data} />;
};
