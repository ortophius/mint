import { AsyncThunk, Slice } from "@reduxjs/toolkit";
import { ReactElement, useEffect, useState } from "react";
import { useAppDispatch } from "../config/store";
import { effects } from "./effects";
import { isClient } from "./isClient";
import { useAppStore } from "./useAppStore";

type AnyComponent<P extends object> = ({ ...props }: P) => ReactElement;

export function withAsyncThunk<P extends object = {}, R = unknown>(
  Child: AnyComponent<P>,
  thunk: AsyncThunk<R, void, unknown>
): (props: P) => ReactElement;

export function withAsyncThunk<P extends object = {}, R = unknown, A = []>(
  Child: AnyComponent<P>,
  thunk: AsyncThunk<R, A, unknown>
) {
  return ({ ...props }: P & { thunkArg: A }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (isClient)
        effects.push(() => {
          dispatch(thunk(props.thunkArg));
        });
      else dispatch(thunk(props.thunkArg));
    }, [props.thunkArg, dispatch]);

    return <Child {...props} />;
  };
}

export function withSlice<P extends object = {}>(
  Child: AnyComponent<P>,
  slice: Slice
) {
  return ({ ...props }: P) => {
    const [attached, setAttached] = useState(false);
    const store = useAppStore();

    if (!attached) {
      store.attachReducer(slice.reducer, slice.name);
      setAttached(true);
    }

    return <Child {...props} />;
  };
}
