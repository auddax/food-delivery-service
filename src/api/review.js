import axios from 'axios';
import { BASE_URL } from 'src/constants';

export const getReveiwsByRestaurantId = (restaurantId) => {
  return axios
    .get(`${BASE_URL}/api/reviews`, { params: { restaurantId } })
    .then((result) => result.data)
    .catch((error) => {
      return Promise.reject(error);
    });
};
