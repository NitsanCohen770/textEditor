import { useReducer, useRef, useCallback } from 'react';

export const useEnhancedReducer = (reducer, initState, initializer) => {
  const lastState = useRef(initState);
  const getState = useCallback(() => lastState.current, []);
  return [
    ...useReducer(
      (state, action) => (lastState.current = reducer(state, action)),
      initState,
      initializer
    ),
    getState,
  ];
};
