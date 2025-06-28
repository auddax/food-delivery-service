import { BASE_URL } from 'src/constants';

const makeRequest = async (path, params) => {
  const response = await fetch(`${BASE_URL}/${path}`, { ...params });

  if (!response.ok) {
    return { error: response.status, isError: true, data: null };
  }

  const result = await response.json();

  return { error: null, isError: false, data: result };
};

export const getAllRestaurants = async () => {
  return await makeRequest('restaurants', { cache: 'force-cache' });
};

export const getRestaurantById = async (restaurantId) => {
  return await makeRequest(`restaurant/${restaurantId}`);
};

export const getDishById = async (dishId) => {
  return await makeRequest(`dish/${dishId}`);
};

export const getDishesByRestaurantId = async (restaurantId) => {
  return await makeRequest(`dishes?restaurantId=${restaurantId}`);
};

export const getReviewsByRestaurantId = async (restaurantId) => {
  return await makeRequest(`reviews?restaurantId=${restaurantId}`);
};

export const getAllUsers = async () => {
  return await makeRequest('users');
};

export const addReview = async ({ restaurantId, review }) => {
  return await makeRequest(`review/${restaurantId}`, {
    method: 'POST',
    body: review,
  });
};

export const editReview = async ({ reviewId, review }) => {
  return await makeRequest(`review/${reviewId}`, {
    method: 'PATCH',
    body: review,
  });
};
