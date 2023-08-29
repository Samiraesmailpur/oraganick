import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@redux/products/operations";

export const addOrder = createAsyncThunk(
  "cart/addOrder",
  async (data, thunkAPI) => {
    try {
      const res = await instance.post(`/api/orders`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
