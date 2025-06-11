import { NavigationBar } from 'src/components/NavigationBar/NavigationBar';
import { RestaurantLink } from 'src/components/RestaurantLink/RestaurantLink';

export const RestaurantsBar = ({ items }) => (
  <NavigationBar>
    {items?.map((id) => (
      <RestaurantLink key={id} id={id} />
    ))}
  </NavigationBar>
);
