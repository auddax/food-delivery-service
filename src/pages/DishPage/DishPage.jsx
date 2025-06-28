import { Dish } from 'src/components/Dish/Dish';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { getDishById } from 'src/services';

export const DishPage = async ({ params }) => {
  const { dishId } = await params;
  const { data, isError, error } = await getDishById(dishId);

  if (isError) {
    return <ErrorMessage message={error.data} />;
  }

  return <Dish dish={data} />;
};
