import { NavigationBar } from 'src/components/NavigationBar/NavigationBar';
import { RestaurantLink } from 'src/components/RestaurantLink/RestaurantLink';

export const RestaurantsBar = ({ items }) => (
  <NavigationBar>
    {items?.map(({ name, id }) => (
      <RestaurantLink key={id} name={name} id={id} />
    ))}
  </NavigationBar>
);
