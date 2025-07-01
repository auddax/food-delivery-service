import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { ReviewForm } from 'src/components/ReviewForm/ReviewForm';
import { ReviewsList } from 'src/components/ReviewsList/ReviewsList';
import { getAllUsers, getReviewsByRestaurantId } from 'src/services';
import { keyBy } from 'src/utils/helpers';

export const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;

  const [reviews, users] = await Promise.all([
    getReviewsByRestaurantId(restaurantId),
    getAllUsers(),
  ]);

  if (reviews.isError || users.isError) {
    return (
      <>
        {reviews.error && <ErrorMessage message={reviews.error.data} />}
        {users.error && <ErrorMessage message={users.error.data} />}
      </>
    );
  }

  return (
    <>
      <ReviewsList reviews={reviews.data} users={users.data} />
      <ReviewForm
        reviewsByUserId={keyBy(reviews.data, 'userId')}
        restaurantId={restaurantId}
      />
    </>
  );
};
