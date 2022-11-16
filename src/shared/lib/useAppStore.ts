import { Reducer, Store } from "@reduxjs/toolkit";
import { useStore } from "react-redux";
import { StaticRootState } from "../config/store";

export const useAppStore = useStore as () => Store<StaticRootState> & {
  attachReducer: (reducer: Reducer, name: string) => void;
};
