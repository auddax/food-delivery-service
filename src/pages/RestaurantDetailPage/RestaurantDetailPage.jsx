import { useParams } from 'next/navigation';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { RestaurantDetail } from 'src/components/RestaurantDetail/RestaurantDetail';
import { useGetRestaurantByIdQuery } from 'src/store/api';

export const RestaurantDetailPage = ({ children }) => {
  const { restaurantId } = useParams();
  const { data, isLoading, isError, error } =
    useGetRestaurantByIdQuery(restaurantId);

  if (isLoading) {
    return <Loader />;
  }

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
