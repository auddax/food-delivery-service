import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { RestaurantsBar } from 'src/components/RestaurantsBar/RestaurantsBar';
import { REQUEST_STATUS } from 'src/constants';
import {
  selectError,
  selectRequestStatus,
  selectRestaurantIds,
} from 'src/store/slices/restaurant/restaurant.slice';
import { loadAllRestaurants } from 'src/store/slices/restaurant/restaurant.thunk';

export const RestaurantsPage = () => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const requestStatus = useSelector(selectRequestStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(loadAllRestaurants());
  }, [dispatch]);

  if (requestStatus === REQUEST_STATUS.PENDING) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <>
      <RestaurantsBar items={restaurantIds} />
      <Outlet />
    </>
  );
};
