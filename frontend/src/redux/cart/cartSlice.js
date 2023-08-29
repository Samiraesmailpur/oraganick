import { createSlice } from "@reduxjs/toolkit";
import { addOrder } from "./operations";

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
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    updateQuantity: (state, action) => {
      const { id, newQuantity } = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    },

    deleteFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrder.pending, handlePending)
      .addCase(addOrder.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.items = [];
      })
      .addCase(addOrder.rejected, handleRejected);
  },
});

export const { addToCart, deleteFromCart, updateQuantity } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
