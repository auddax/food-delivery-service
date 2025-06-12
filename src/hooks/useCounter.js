import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectItemAmountById,
} from 'src/store/slices/cart/cart.slice';

export const useCounter = (id) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectItemAmountById(state, id));

  const incrementCount = useCallback(() => {
    dispatch(addToCart(id));
  }, [dispatch, id]);

  const decrementCount = useCallback(() => {
    dispatch(removeFromCart(id));
  }, [dispatch, id]);

  return [count, incrementCount, decrementCount];
};
