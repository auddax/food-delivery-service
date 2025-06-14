import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { RestaurantDetail } from 'src/components/RestaurantDetail/RestaurantDetail';
import { REQUEST_STATUS } from 'src/constants';
import {
  selectError,
  selectRequestStatus,
} from 'src/store/slices/restaurantDetail/restaurantDetail.slice';
import { loadRestaurantDetail } from 'src/store/slices/restaurantDetail/restaurantDetail.thunk';

export const RestaurantDetailPage = () => {
  const { restaurantId } = useParams();
  const requestStatus = useSelector(selectRequestStatus);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail(restaurantId));
  }, [dispatch, restaurantId]);

  if (requestStatus === REQUEST_STATUS.PENDING) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <>
      <RestaurantDetail />
      <Outlet />
    </>
  );
};
