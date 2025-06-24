export const RATING_COUNTER = {
  initialValue: 1,
  minValue: 1,
  maxValue: 5,
};

export const INITIAL_USER_INFO = {
  name: '',
  review: '',
  rating: 0,
};

export const APP_PATHS = {
  HOME: '/',
  RESTAURANTS: '/restaurants',
};

export const RESTAURANT_PATHS = {
  RESTAURANT: ':restaurantId',
};

export const RESTAURANT_DETAIL_PATHS = {
  MENU: 'menu',
  REVIEWS: 'reviews',
};

export const DISH_PATHS = {
  DISH: '/dish/:dishId',
};

export const BASE_URL = 'http://localhost:3001/api';

export const REQUEST_STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};
