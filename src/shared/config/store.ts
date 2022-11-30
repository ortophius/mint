import {} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartReducer } from "../../feature/cart/model";
import { createStore } from "../lib/createStore";

export const getStore = () => {
  const store = createStore({
    reducer: {
      cart: cartReducer,
    },
  });

  return store;
};

type Store = ReturnType<typeof getStore>;

export type StaticRootState = ReturnType<Store["getState"]>;

export type AppDispatch = Store["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StaticRootState> =
  useSelector;
