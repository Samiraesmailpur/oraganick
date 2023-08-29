import { createSlice } from "@reduxjs/toolkit";
import { getShopProducts } from "./operations";

const handlePending = (state) => {
  state.products = [];
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getShopProducts.pending, handlePending)
      .addCase(getShopProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(getShopProducts.rejected, handleRejected);
  },
});

export const shopReducer = shopSlice.reducer;
