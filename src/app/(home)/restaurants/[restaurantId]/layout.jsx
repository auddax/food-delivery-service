import { RestaurantDetailPage } from 'src/pages/RestaurantDetailPage/RestaurantDetailPage';
import { getRestaurantById } from 'src/services';

export const generateStaticParams = () => {
  return [
    { restaurantId: 'bb8afbec-2fec-491f-93e9-7f13950dd80b' },
    { restaurantId: 'd9241927-09e1-44f3-8986-a76346869037' },
  ];
};

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;
  const { data } = await getRestaurantById(restaurantId);

  if (data) {
    return {
      title: data.name,
    };
  }
};

export default RestaurantDetailPage;
