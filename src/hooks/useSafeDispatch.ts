import { useCallback, useLayoutEffect, useRef } from 'react';

// This ensures that the dispatch function will not rerender a component due to a change in
// state if the component is not rendered on the page
export default function useSafeDispatch(dispatch: any) {
  const mounted = useRef(false);

  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return useCallback(
    (...args: any[]) => {
      if (mounted.current) {
        dispatch(...args);
      }
    },
    [dispatch],
  );
}
