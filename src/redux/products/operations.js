import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://organick-backend.onrender.com",
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page, thunkAPI) => {
    try {
      const res = await instance.get(`/api/products`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductsById = createAsyncThunk(
  "products/getProductById",
  async (id, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/products/${id}`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
