import { configureStore } from '@reduxjs/toolkit';
import { dishSlice } from 'src/store/slices/dish/dish.slice';
import { restaurantSlice } from 'src/store/slices/restaurant/restaurant.slice';
import { reviewSlice } from 'src/store/slices/review/review.slice';
import { userSlice } from 'src/store/slices/user/user.slice';

export const store = configureStore({
  reducer: {
    [dishSlice.name]: dishSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});
