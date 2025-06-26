'use client';

import { ErrorMessage } from 'src/components/ErrorMessage/ErrorMessage';
import { Loader } from 'src/components/Loader/Loader';
import { RestaurantsBar } from 'src/components/RestaurantsBar/RestaurantsBar';
import { useGetAllRestaurantsQuery } from 'src/store/api';

export const RestaurantsPage = () => {
  const { data, isLoading, isError, error } = useGetAllRestaurantsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage message={error.data} />;
  }

  return <RestaurantsBar items={data} />;
};
