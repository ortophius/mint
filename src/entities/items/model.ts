import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "../../shared/api/modules/types";

const displayItemsSlice = createSlice({
  name: "displaySlice",
  initialState: [] as MenuItem[],
  reducers: {
    setDisplayItems: (state, action: PayloadAction<MenuItem[]>) => {
      state = action.payload;
    },
  },
});

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
export const { setDisplayItems } = displayItemsSlice.actions;
