import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectRequestError,
} from 'src/store/slices/request/request.slice';

export const useRequest = (thunk, params) => {
  const dispatch = useDispatch();
  const [request, setRequest] = useState(null);

  const isLoading = useSelector((state) =>
    selectIsLoading(state, request?.requestId)
  );
  const error = useSelector((state) =>
    selectRequestError(state, request?.requestId)
  );

  useEffect(() => {
    const request = dispatch(thunk(params));
    setRequest(request);

    return () => {
      request.abort();
      setRequest(null);
    };
  }, [dispatch, params, thunk]);

  return { isLoading, error };
};
