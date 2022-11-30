/* eslint-disable no-underscore-dangle */
import {
  Action,
  AnyAction,
  AsyncThunkAction,
  CombinedState,
  combineReducers,
  configureStore,
  ConfigureStoreOptions,
  Dispatch,
  Middleware,
  MiddlewareArray,
  Reducer,
  ReducersMapObject,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { isClient } from "./isClient";

declare global {
  interface Window {
    __PRELOAD: {
      async: AsyncStoreMap;
      sync: any;
    };
  }
}

type AsyncStoreMap<S = unknown> = {
  [index: string]: S;
};

type DynamicReducerMap = {
  sync?: Reducer;
  async?: Reducer<AsyncStoreMap>;
};

const isReducer = (
  reducerOrMap: Reducer | ReducersMapObject
): reducerOrMap is Reducer => {
  return reducerOrMap instanceof Function;
};

const createReducerPlaceholder = (state?: any) => () => ({
  state,
  sent: true,
  resolved: true,
});

export const createStore = <S = unknown>({
  ...params
}: ConfigureStoreOptions<S>) => {
  const asyncReducers: ReducersMapObject = {
    placeholder: createReducerPlaceholder(),
  };

  if (isClient) {
    const { async } = window.__PRELOAD;
    Object.keys(async).forEach((key) => {
      asyncReducers[key] = () => async[key];
    });
  }

  const createReducer: () => Reducer<
    CombinedState<{
      sync?: S;
      async?: AsyncStoreMap;
    }>,
    AnyAction
  > = () => {
    const reducersMap: DynamicReducerMap = {};
    const syncReducer = params.reducer;

    if (params.reducer)
      reducersMap.sync = isReducer(syncReducer)
        ? syncReducer
        : combineReducers(syncReducer);
    reducersMap.async = combineReducers<AsyncStoreMap>(asyncReducers);

    return combineReducers(reducersMap);
  };

  const store = configureStore({
    preloadedState:
      typeof window !== "undefined"
        ? // eslint-disable-next-line no-underscore-dangle
          window.__PRELOAD
        : {
            async: {},
            sync: {},
          },
    reducer: createReducer(),
  });

  const attachReducer = (reducer: Reducer, key: string) => {
    asyncReducers[key] = reducer;
    const newReducer = createReducer();

    store.replaceReducer(newReducer);
  };

  return {
    ...store,
    attachReducer,
  };
};
