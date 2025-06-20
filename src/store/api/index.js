import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'src/constants';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Reviews'],
  endpoints: (builder) => ({
    getAllRestaurants: builder.query({
      query: () => '/restaurants',
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getDishById: builder.query({
      query: (dishId) => `/dish/${dishId}`,
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: [{ type: 'Reviews', id: 'all' }],
    }),
    getAllUsers: builder.query({
      query: () => '/users',
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: 'POST',
        body: review,
      }),
      invalidatesTags: [{ type: 'Reviews', id: 'all' }],
    }),
    editReview: builder.mutation({
      query: ({ reviewId, review }) => ({
        url: `/review/${reviewId}`,
        method: 'PATCH',
        body: review,
      }),
      invalidatesTags: [{ type: 'Reviews', id: 'all' }],
    }),
  }),
});

export const {
  useGetAllRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetDishByIdQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetAllUsersQuery,
  useAddReviewMutation,
  useEditReviewMutation,
} = api;
