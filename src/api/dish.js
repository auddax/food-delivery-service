import axios from 'axios';
import { BASE_URL } from 'src/constants';

export const getDishById = (dishId) => {
  return axios
    .get(`${BASE_URL}/dish/${dishId}`)
    .then((result) => result.data)
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const getDishesByRestaurantId = (restaurantId) => {
  return axios
    .get(`${BASE_URL}/dishes`, { params: { restaurantId } })
    .then((result) => result.data)
    .catch((error) => {
      return Promise.reject(error);
    });
};
