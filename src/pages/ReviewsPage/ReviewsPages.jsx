import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { ReviewForm } from 'src/components/ReviewForm/ReviewForm';
import { ReviewsList } from 'src/components/ReviewsList/ReviewsList';
import { REQUEST_STATUS } from 'src/constants';
import {
  selectError,
  selectRequestStatus,
} from 'src/store/slices/review/review.slice';
import { loadReviewsByRestaurantId } from 'src/store/slices/review/review.thunk';
import { loadAllUsers } from 'src/store/slices/user/user.thunk';

export const ReviewsPage = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const requestStatus = useSelector(selectRequestStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(loadReviewsByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  useEffect(() => {
    dispatch(loadAllUsers());
  }, [dispatch]);

  if (requestStatus === REQUEST_STATUS.PENDING) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <>
      <ReviewsList />
      <ReviewForm />
    </>
  );
};
