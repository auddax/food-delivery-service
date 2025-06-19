import { useParams } from 'react-router';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { ReviewForm } from 'src/components/ReviewForm/ReviewForm';
import { ReviewsList } from 'src/components/ReviewsList/ReviewsList';
import {
  useAddReviewMutation,
  useGetAllUsersQuery,
  useGetReviewsByRestaurantIdQuery,
} from 'src/store/api';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const {
    data: reviews,
    isLoading: isReviewsLoading,
    isError: isReviewsError,
    error: reviewsError,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  const {
    data: users,
    isLoading: isUsersLoading,
    isError: isUsersError,
    error: usersError,
  } = useGetAllUsersQuery();

  const [addReviewMutation, { isLoading }] = useAddReviewMutation();

  const handleAddReview = (review) => {
    addReviewMutation({ restaurantId, review });
  };

  if (isReviewsLoading || isUsersLoading) {
    return <Loader />;
  }

  if (isReviewsError || isUsersError) {
    return (
      <>
        {reviewsError && <ErrorMessage message={reviewsError.data} />}
        {usersError && <ErrorMessage message={usersError.data} />}
      </>
    );
  }

  return (
    <>
      <ReviewsList reviews={reviews} users={users} isLoading={isLoading} />
      <ReviewForm onSubmitForm={handleAddReview} isSubmitDisabled={isLoading} />
    </>
  );
};
