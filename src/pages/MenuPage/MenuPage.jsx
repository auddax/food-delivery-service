'use client';

import { useParams } from 'next/navigation';
import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { Menu } from 'src/components/Menu/Menu';
import { useGetDishesByRestaurantIdQuery } from 'src/store/api';

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const { data, isLoading, isError, error } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage message={error.data} />;
  }

  return <Menu menu={data} />;
};
