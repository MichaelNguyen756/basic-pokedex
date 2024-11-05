import { useCallback, useReducer } from 'react';

import asyncReducer from '../../helpers/asyncReducer';
import { asyncStatus } from '../constants';
import useSafeDispatch from './useSafeDispatch';

export default function useAsync({ initialState = {}, reducer = asyncReducer } = {}) {
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

  const setState = useCallback(
    (data: any) => dispatch({ type: asyncStatus.resolved, data }),
    [dispatch],
  );

  return {
    error,
    status,
    data,
    run,
    setState,
  };
}
