import axios from 'axios';
import { BASE_URL } from 'src/constants';

export const getReviewsByRestaurantId = (restaurantId) => {
  return axios
    .get(`${BASE_URL}/reviews`, { params: { restaurantId } })
    .then((result) => result.data)
    .catch((error) => {
      return Promise.reject(error);
    });
};
