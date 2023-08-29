import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@redux/products/operations";

export const getShopProducts = createAsyncThunk(
  "shop/getShopProducts",
  async (page, thunkAPI) => {
    try {
      const res = await instance.get("/api/shop");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
