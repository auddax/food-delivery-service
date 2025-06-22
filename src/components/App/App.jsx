import './App.scss';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from 'src/components/Layout/Layout';
import {
  APP_PATHS,
  DISH_PATHS,
  RESTAURANT_DETAIL_PATHS,
  RESTAURANT_PATHS,
} from 'src/constants';
import { ButtonThemeContextProvider } from 'src/contexts/ButtonThemeContext/ButtonThemeContextProvider';
import { UserContextProvider } from 'src/contexts/UserContext/UserContexProvider';
import { DishPage } from 'src/pages/DishPage/DishPage';
import { HomePage } from 'src/pages/HomePage/HomePage';
import { MenuPage } from 'src/pages/MenuPage/MenuPage';
import { RestaurantDetailPage } from 'src/pages/RestaurantDetailPage/RestaurantDetailPage';
import { RestaurantsPage } from 'src/pages/RestaurantsPage/RestaurantsPage';
import { ReviewsPage } from 'src/pages/ReviewsPage/ReviewsPage';
import { store } from 'src/store/store';

const App = () => (
  <Provider store={store}>
    <UserContextProvider>
      <ButtonThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={APP_PATHS.HOME} element={<Layout />}>
              <Route path={APP_PATHS.HOME} element={<HomePage />} />
              <Route path={APP_PATHS.RESTAURANTS} element={<RestaurantsPage />}>
                <Route
                  path={RESTAURANT_PATHS.RESTAURANT}
                  element={<RestaurantDetailPage />}
                >
                  <Route index element={<MenuPage />} />
                  <Route
                    path={RESTAURANT_DETAIL_PATHS.MENU}
                    element={<MenuPage />}
                  />
                  <Route
                    path={RESTAURANT_DETAIL_PATHS.REVIEWS}
                    element={<ReviewsPage />}
                  />
                </Route>
              </Route>
              <Route path={DISH_PATHS.DISH} element={<DishPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ButtonThemeContextProvider>
    </UserContextProvider>
  </Provider>
);

export default App;
