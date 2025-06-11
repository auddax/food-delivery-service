import { NavigationBar } from 'src/components/NavigationBar/NavigationBar';
import { NavigationLink } from 'src/components/NavigationLink/NavigationLink';
import { APP_PATHS } from 'src/constants';

export const AppBar = () => (
  <NavigationBar>
    {Object.entries(APP_PATHS).map(([title, path]) => (
      <NavigationLink key={path} path={path}>
        {title}
      </NavigationLink>
    ))}
  </NavigationBar>
);
