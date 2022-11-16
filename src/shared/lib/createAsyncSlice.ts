import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { v4 } from "uuid";
import { StaticRootState } from "../config/store";
import { isClient } from "./isClient";
import { promises } from "./promises";

export type AsyncSliceParams<S = never, Q = never> = {
  dispatch: ThunkDispatch<S, Q, AnyAction>;
  name: string;
  initialState: S;
  fn: (params?: Q) => Promise<S>;
  fail?: (err: unknown) => void;
};

export const settledSelector = (state: StaticRootState) =>
  state.async.settled as Record<string, boolean>;

function createAsyncSlice<S = never, Q = never>({
  name = v4(),
  initialState,
  fn,
  dispatch,
}: AsyncSliceParams<S, Q>) {
  const thunk = createAsyncThunk(name, fn);
  const slice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (biulder) => {
      biulder.addCase(thunk.fulfilled, (_, { payload }) => payload);
    },
  });

  const sliceSelector = (state: StaticRootState) => state.async[name] as S;

  const fetch = async (...args: Parameters<typeof fn>) => {
    const promise = dispatch(thunk(...args));
    if (!isClient) {
      const id = v4();
      promises.push(promise);
    }
  };

  return { slice, fetch, sliceSelector };
}

export default createAsyncSlice;
