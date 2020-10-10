import { useCallback, useReducer } from 'react';

import asyncReducer, { asyncStatus } from '../helpers/asyncReducer';
import useSafeDispatch from '../hooks/useSafeDispatch';

export default function useAsync({ initialState = {}, reducer = asyncReducer }) {
  const [{ data, status, error }, unsafeDispatch] = useReducer(reducer, {
    status: asyncStatus.idle,
    data: null,
    error: null,
    ...initialState,
  });

  const dispatch = useSafeDispatch(unsafeDispatch);

  const run = useCallback(
    (promise: Promise<any>) => {
      dispatch({ type: asyncStatus.pending });
      promise.then(
        data => dispatch({ type: asyncStatus.resolved, data }),
        error => dispatch({ type: asyncStatus.rejected, error }),
      );
    },
    [dispatch],
  );

  return {
    error,
    status,
    data,
    run,
  };
}
