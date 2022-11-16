import { useState } from "react";
import { useAppDispatch } from "../config/store";
import createAsyncSlice, { AsyncSliceParams } from "./createAsyncSlice";
import { useAppStore } from "./useAppStore";

type UseAsyncModelParams<S = never, Q = never> = {
  model: Omit<AsyncSliceParams<S, Q>, "dispatch">;
  fetchParam?: Q;
  ssr?: boolean;
};

export const useAsyncModel = <S = never, Q = never>({
  model,
  fetchParam,
  ssr = true,
}: UseAsyncModelParams<S, Q>) => {
  const [initialFetchSent, setInitialFetchSent] = useState(false);
  const [attached, setAttached] = useState(false);
  const dispatch = useAppDispatch();
  const store = useAppStore();

  const currentSlice = createAsyncSlice<S, Q>({
    ...model,
    dispatch,
  });

  const { slice, fetch, sliceSelector } = currentSlice;

  if (!attached) {
    setAttached(true);
    store.attachReducer(slice.reducer, model.name);
  }

  if (ssr && !initialFetchSent) {
    fetch(fetchParam);
    setInitialFetchSent(true);
  }

  return {
    sliceSelector,
    fetch,
  };
};
