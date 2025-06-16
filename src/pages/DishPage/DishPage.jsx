import { useParams } from 'react-router';
import { Dish } from 'src/components/Dish/Dish';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { useRequest } from 'src/hooks/useRequest';
import { loadDishDetail } from 'src/store/slices/dish/dish.thunk';

export const DishPage = () => {
  const { dishId } = useParams();
  const { isLoading, error } = useRequest(loadDishDetail, dishId);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return <Dish id={dishId} />;
};
