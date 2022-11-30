import { AsyncThunk, Slice } from "@reduxjs/toolkit";
import {
  createContext,
  useLayoutEffect,
  useEffect,
  ReactElement,
  useContext,
  useState,
} from "react";
import { useAppDispatch, useAppSelector } from "../config/store";
import { isClient } from "./isClient";
import { EffectsContext } from "./promises";
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
    const [dispatched, setDispatched] = useState(false);
    const effects = useContext(EffectsContext);

    if (!dispatched) {
      if (!isClient) {
        effects.push(() => dispatch(thunk(props.thunkArg)));
      } else dispatch(thunk(props.thunkArg));
      setDispatched(true);
    }

    useEffect(() => {}, [dispatch, effects, props.thunkArg]);

    return <Child {...props} />;
  };
}

export const ReducersContext = createContext<string[]>([]);

export function withSlice<P extends object = {}>(
  Child: AnyComponent<P>,
  slice: Slice
) {
  return ({ ...props }: P) => {
    const store = useAppStore();
    const attachedReducers = useContext(ReducersContext);
    if (!attachedReducers[slice.name]) {
      store.attachReducer(slice.reducer, slice.name);
      attachedReducers.push(slice.name);
    }

    return <Child {...props} />;
  };
}
