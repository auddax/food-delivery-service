import { useCallback, useReducer } from 'react';
import { RATING_COUNTER } from 'src/constants';

const initialState = {
  name: '',
  text: '',
  rating: RATING_COUNTER.initialValue,
};

const SET_NAME_ACTION = 'setName';
const SET_REVIEW_ACTION = 'setReview';
const SET_RATING_ACTION = 'setRating';
const SET_FORM_ACTION = 'setForm';
const SET_CLEAR_ACTION = 'clear';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return {
        ...state,
        name: payload,
      };
    case SET_REVIEW_ACTION:
      return {
        ...state,
        text: payload,
      };
    case SET_RATING_ACTION:
      return {
        ...state,
        rating: payload,
      };
    case SET_FORM_ACTION:
      return payload;
    case SET_CLEAR_ACTION:
      return initialState;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, initialState);

  const onNameChange = (e) => {
    dispatch({ type: SET_NAME_ACTION, payload: e.target.value });
  };

  const onReviewChange = (e) => {
    dispatch({ type: SET_REVIEW_ACTION, payload: e.target.value });
  };

  const onRatingChange = (rating) => {
    dispatch({ type: SET_RATING_ACTION, payload: rating });
  };

  const setForm = useCallback(({ name, text, rating }) => {
    dispatch({ type: SET_FORM_ACTION, payload: { name, text, rating } });
  }, []);

  const clear = () => {
    dispatch({ type: SET_CLEAR_ACTION });
  };

  return { form, onNameChange, onReviewChange, onRatingChange, setForm, clear };
};
