import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { REACT_APP_BACKEND_URL_DEVELOPMENT, REACT_APP_BACKEND_URL_PRODUCTION } =
  process.env;

export const instance = axios.create({
  baseURL:
    process.env["NODE_ENV"] === "development"
      ? REACT_APP_BACKEND_URL_DEVELOPMENT
      : REACT_APP_BACKEND_URL_PRODUCTION,
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page, thunkAPI) => {
    try {
      const res = await instance.get(`/api/products?page=${page}`);
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
