import { useParams } from 'react-router';
import { Menu } from 'src/components/Menu/Menu';

export const MenuPage = () => {
  const { restaurantId } = useParams();

  return <Menu restaurantId={restaurantId} />;
};
