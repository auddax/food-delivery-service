import axios from 'axios';
import { BASE_URL } from 'src/constants';

export const getAllUsers = () => {
  return axios
    .get(`${BASE_URL}/api/users`)
    .then((result) => result.data)
    .catch((error) => {
      return Promise.reject(error);
    });
};
