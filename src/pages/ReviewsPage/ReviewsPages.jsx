import { useParams } from 'react-router';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { ReviewForm } from 'src/components/ReviewForm/ReviewForm';
import { ReviewsList } from 'src/components/ReviewsList/ReviewsList';
import { useRequest } from 'src/hooks/useRequest';
import { loadReviewsByRestaurantId } from 'src/store/slices/review/review.thunk';
import { loadAllUsers } from 'src/store/slices/user/user.thunk';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const { isLoading: isReviewsLoading, error: reviewsError } = useRequest(
    loadReviewsByRestaurantId,
    restaurantId
  );
  const { isLoading: isUsersLoading, error: usersError } =
    useRequest(loadAllUsers);

  if (isReviewsLoading || isUsersLoading) {
    return <Loader />;
  }

  if (reviewsError || usersError) {
    return (
      <>
        {reviewsError && <ErrorMessage message={reviewsError.message} />}
        {usersError && <ErrorMessage message={usersError.message} />}
      </>
    );
  }

  return (
    <>
      <ReviewsList />
      <ReviewForm />
    </>
  );
};
