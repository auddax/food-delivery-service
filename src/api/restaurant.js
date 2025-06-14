import axios from 'axios';
import { BASE_URL } from 'src/constants';

export const getAllRestaurants = () => {
  return axios
    .get(`${BASE_URL}/api/restaurants`)
    .then((result) => result.data)
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const getRestaurantById = (id) => {
  return axios
    .get(`${BASE_URL}/api/restaurant/${id}`)
    .then((result) => result.data)
    .catch((error) => {
      return Promise.reject(error);
    });
};
