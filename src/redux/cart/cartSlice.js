import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
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
});

export const { addToCart, deleteFromCart, updateQuantity } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
