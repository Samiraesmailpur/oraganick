import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./operations";

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
  totalProducts: null,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, handlePending)
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload.products];
        // Check if totalProducts is not already set, if not set it
        if (!state.totalProducts) {
          state.totalProducts = action.payload.totalProducts;
        }
      })

      .addCase(getProducts.rejected, handleRejected);
  },
});

export const { clearItems } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
