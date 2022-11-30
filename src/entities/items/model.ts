import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDefaultItems, getItems } from "../../shared/api/modules/menu";
import { MenuItem } from "../../shared/api/modules/types";

export const loadDefaultItems = createAsyncThunk(
  "displayItems/init",
  async () => {
    const response = await getDefaultItems();
    return response;
  }
);

export const loadItems = createAsyncThunk(
  "displayItems/update",
  async (categoryId: string) => {
    const response = await getItems(categoryId);
    return response;
  }
);

export const displayItemsSlice = createSlice({
  name: "displayItems",
  initialState: [] as MenuItem[],
  reducers: {
    setDisplayItems: (state, action: PayloadAction<MenuItem[]>) => {
      state = action.payload;
    },
    resetDisplayItems: () => [],
  },
  extraReducers: (builder) => {
    builder.addCase(loadDefaultItems.fulfilled, (_, { payload }) => payload);
    builder.addCase(loadItems.fulfilled, (_, { payload }) => payload);
  },
});

export const displayItemsSelector = (state) =>
  state.async.displayItems as MenuItem[];

const currentItemSlice = createSlice({
  name: "currentItem",
  initialState: null as null | MenuItem,
  reducers: {
    setCurrentItem: (state, action: PayloadAction<MenuItem>) => {
      state = action.payload;
    },
  },
});

export const { setCurrentItem } = currentItemSlice.actions;
export const { setDisplayItems, resetDisplayItems } = displayItemsSlice.actions;
