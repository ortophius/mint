import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createStore } from "../lib/createStore";

export const getStore = () => {
  const store = createStore({
    reducer: () => null,
  });

  return store;
};

const a = getStore().getState();

type Store = ReturnType<typeof getStore>;

export type StaticRootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StaticRootState> =
  useSelector;
