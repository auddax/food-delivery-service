import { useParams } from 'react-router';
import { Dish } from 'src/components/Dish/Dish';

export const DishPage = () => {
  const { dishId } = useParams();

  return <Dish id={dishId} />;
};
