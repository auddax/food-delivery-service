import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from 'src/store/slices/cart/cart.slice';
import { dishSlice } from 'src/store/slices/dish/dish.slice';
import { restaurantSlice } from 'src/store/slices/restaurant/restaurant.slice';
import { restaurantDetailSlice } from 'src/store/slices/restaurantDetail/restaurantDetail.slice';
import { reviewSlice } from 'src/store/slices/review/review.slice';
import { userSlice } from 'src/store/slices/user/user.slice';

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [restaurantDetailSlice.name]: restaurantDetailSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});
