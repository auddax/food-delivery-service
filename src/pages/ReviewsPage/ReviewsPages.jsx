import { useParams } from 'react-router';
import { ReviewForm } from 'src/components/ReviewForm/ReviewForm';
import { ReviewsList } from 'src/components/ReviewsList/ReviewsList';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  return (
    <>
      <ReviewsList restaurantId={restaurantId} />
      <ReviewForm />
    </>
  );
};
