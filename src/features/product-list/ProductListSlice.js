import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchAllProductsByFilter } from "./ProductListAPI.js";

const initialState = {
  products: [],
  status: "idle",
};

//as actions cant be async we use thunk as a middleware
export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();

    return response.data;
  }
);
export const fetchAllProductsByFilterAsync = createAsyncThunk(
  "product/fetchAllProductsByFilter",
  async (filter) => {
    const response = await fetchAllProductsByFilter(filter);

    return response.data;
  }
);

export const ProductSlice = createSlice({
  //name given to the state along with the data it will hold
  name: "product",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      }).addCase(fetchAllProductsByFilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { increment } = ProductSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default ProductSlice.reducer;
