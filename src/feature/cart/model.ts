import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCart, getItem } from "../../shared/api/modules/menu";
import { MenuItem } from "../../shared/api/modules/types";
import { Cart } from "./types";

const SLICE_NAME = "cart";
const initialState = [] as Cart;

export const fetchCart = createAsyncThunk(
  `${SLICE_NAME}/fetchCart`,
  async () => {
    const cartData = await getCart();
    return cartData;
  }
);

export const addItemToCart = createAsyncThunk(
  `${SLICE_NAME}/addItem`,
  async ({ id, count }: { id: MenuItem["id"]; count: number }) => {
    const fetchedItem = await getItem(id);
    return { ...fetchedItem, count };
  }
);

export const cartSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    remove: (
      state,
      {
        payload: { id, count },
      }: PayloadAction<{ id: MenuItem["id"]; count: number }>
    ) => {
      const currentItem = state.find((item) => item.id === id);
      if (!currentItem) {
        return;
      }
      if (count >= currentItem.count) currentItem.count = 0;
      else currentItem.count -= count;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (_, { payload }) => payload);
    builder.addCase(addItemToCart.fulfilled, (state, { payload }) => {
      const currentItem = state.find((item) => item.id === payload.id);
      if (!currentItem) state.push(payload);
      else currentItem.count += payload.count;
    });
  },
});

export const {
  reducer: cartReducer,
  actions: { remove },
} = cartSlice;
