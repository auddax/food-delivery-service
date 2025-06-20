import { useContext, useMemo } from 'react';
import { useParams } from 'react-router';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { ReviewForm } from 'src/components/ReviewForm/ReviewForm';
import { ReviewsList } from 'src/components/ReviewsList/ReviewsList';
import { UserContext } from 'src/contexts/UserContext/UserContext';
import {
  useAddReviewMutation,
  useEditReviewMutation,
  useGetAllUsersQuery,
  useGetReviewsByRestaurantIdQuery,
} from 'src/store/api';
import { keyBy } from 'src/utils/helpers';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const { user } = useContext(UserContext);
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

  const [addReviewMutation, { isLoading: isAddReviewLoading }] =
    useAddReviewMutation();
  const [editReviewMutation, { isLoading: isEditReviewLoading }] =
    useEditReviewMutation();

  const reviewsByUserId = useMemo(() => keyBy(reviews, 'userId'), [reviews]);

  const handleSubmitReview = (review) => {
    const { userInfo } = user || {};
    const currentUserReview = reviewsByUserId[userInfo.id];

    if (currentUserReview) {
      editReviewMutation({ reviewId: currentUserReview.id, review });
    }

    if (!currentUserReview) {
      addReviewMutation({ restaurantId, review });
    }
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
      <ReviewsList
        reviews={reviews}
        users={users}
        isLoading={isAddReviewLoading || isEditReviewLoading}
      />
      {user?.isAuthorized && (
        <ReviewForm
          review={reviewsByUserId[user?.userInfo?.id] || {}}
          onSubmitForm={handleSubmitReview}
          isSubmitDisabled={isAddReviewLoading || isEditReviewLoading}
        />
      )}
    </>
  );
};
