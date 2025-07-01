import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Menu } from 'src/components/Menu/Menu';
import { getDishesByRestaurantId } from 'src/services';

export const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;
  const { data, isError, error } = await getDishesByRestaurantId(restaurantId);

  if (isError) {
    return <ErrorMessage message={error.data} />;
  }

  return <Menu menu={data} />;
};
