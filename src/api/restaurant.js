import axios from 'axios';
import { BASE_URL } from 'src/constants';

export const getAllRestaurants = () => {
  return axios
    .get(`${BASE_URL}/restaurants`)
    .then((result) => result.data)
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const getRestaurantById = (restaurantId) => {
  return axios
    .get(`${BASE_URL}/restaurant/${restaurantId}`)
    .then((result) => result.data)
    .catch((error) => {
      return Promise.reject(error);
    });
};
