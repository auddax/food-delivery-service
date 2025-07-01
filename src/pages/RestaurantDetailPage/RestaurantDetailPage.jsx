import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { RestaurantDetail } from 'src/components/RestaurantDetail/RestaurantDetail';
import { getRestaurantById } from 'src/services';

export const RestaurantDetailPage = async ({ params, children }) => {
  const { restaurantId } = await params;
  const { data, isError, error } = await getRestaurantById(restaurantId);

  if (isError) {
    return <ErrorMessage message={error.data} />;
  }

  return (
    <>
      <RestaurantDetail restaurant={data} />
      {children}
    </>
  );
};
