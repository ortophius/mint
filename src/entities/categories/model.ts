import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { getAllCategories, getCategory } from "../../shared/api/modules/menu";
import { Category } from "../../shared/api/modules/types";
import { StaticRootState, useAppSelector } from "../../shared/config/store";
import { AsyncStore } from "../../shared/types/helpers";
import { CategoriesState } from "./types";

export const currentCategoryModel = {
  name: "currentCategory",
  initialState: null as null | Category,
  fn: getCategory,
};

export const allCategories = {
  name: "allCategories",
  initialState: [] as Category[],
  fn: getAllCategories,
};

const SLICE_NAME = "categories";
const initialState: CategoriesState = {
  currentCategory: null,
  allCategories: [],
};

export const fetchCategories = createAsyncThunk(
  `${SLICE_NAME}/fetchCategories`,
  async () => {
    const response = await getAllCategories();
    return response;
  }
);

export const categoriesSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.allCategories = payload;
    });
  },
});

export const categoriesSelector = (state: StaticRootState) =>
  state.async[categoriesSlice.name] as CategoriesState;
