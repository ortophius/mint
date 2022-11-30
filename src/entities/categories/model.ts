import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCategories } from "../../shared/api/modules/menu";
import { Category } from "../../shared/api/modules/types";
import { StaticRootState } from "../../shared/config/store";
import { CategoriesState } from "./types";

// export const allCategories = {
//   name: "allCategories",
//   initialState: [] as Category[],
//   fn: getAllCategories,
// };

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
  reducers: {
    changeCurrentCategory: (state, { payload: id }: PayloadAction<string>) => {
      state.currentCategory =
        state.allCategories.find((item) => item.id === id) || null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.allCategories = payload;
      const [firstCategory] = payload;
      state.currentCategory = firstCategory;
    });
  },
});

export const {
  actions: { changeCurrentCategory },
} = categoriesSlice;
export const categoriesSelector = (state: StaticRootState) =>
  state.async[categoriesSlice.name] as CategoriesState;
