import { Slice } from "@reduxjs/toolkit";
import { useState } from "react";
import { StatusPage } from "../../pages/status/statusPage";
import { useAppDispatch, useAppSelector } from "../config/store";
import { useAppStore } from "./useAppStore";

type UseLazySliceParams<S = never, Q = never> = {
  slice: Slice<S>;
  ssr?: boolean;
};

export const useLazySlice = <S = never, Q = never>({
  slice,
  ssr = true,
}: UseLazySliceParams<S, Q>) => {
  const { async } = useAppSelector((state) => state);
  const store = useAppStore();
  if (!async[slice.name]) {
    store.attachReducer(slice.reducer, slice.name);
  }

  return useAppSelector((state) => state.async[slice.name] as S);
};
