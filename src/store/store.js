import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from 'src/store/slices/cart/cart.slice';
import { dishSlice } from 'src/store/slices/dish/dish.slice';
import { requestSlice } from 'src/store/slices/request/request.slice';
import { restaurantSlice } from 'src/store/slices/restaurant/restaurant.slice';
import { reviewSlice } from 'src/store/slices/review/review.slice';
import { userSlice } from 'src/store/slices/user/user.slice';

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});
