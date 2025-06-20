import { useParams } from 'react-router';
import { Dish } from 'src/components/Dish/Dish';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { useGetDishByIdQuery } from 'src/store/api';

export const DishPage = () => {
  const { dishId } = useParams();
  const { data, isLoading, isError, error } = useGetDishByIdQuery(dishId);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage message={error.data} />;
  }

  return <Dish dish={data} />;
};
