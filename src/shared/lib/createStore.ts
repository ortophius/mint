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
import { promises } from "./promises";

type ThunkMiddleware<
  State = unknown,
  BasicAction extends Action = AnyAction,
  ExtraThunkArg = undefined
> = Middleware<
  ThunkDispatch<State, ExtraThunkArg, BasicAction>,
  State,
  ThunkDispatch<State, ExtraThunkArg, BasicAction>
>;

declare global {
  interface Window {
    __PRELOAD: {
      async: AsyncStoreMap;
      sync: any;
    };
  }
}

type AsyncStore<S = never> = {
  resolved: boolean;
  sent: boolean;
  state: S;
};

type AsyncStoreMap = {
  [index: string]: AsyncStore;
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

const promiseMiddleware: Middleware =
  () =>
  (syncDispatch: ThunkDispatch<unknown, unknown, AnyAction>) =>
  (action: AnyAction | AsyncThunkAction<AnyAction, unknown, unknown>) => {
    if (typeof action !== "function") {
      syncDispatch(action);
      return;
    }

    const wrappedThunk = (
      dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
      getState: () => unknown,
      extra: unknown
    ) => {
      const promise = action(dispatch, getState, extra);
      if (!isClient) promises.push(promise);
      return promise;
    };

    syncDispatch(wrappedThunk);
  };

export const createStore = <S = any>({
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
    middleware: (getDefault) => getDefault().prepend(promiseMiddleware),
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
