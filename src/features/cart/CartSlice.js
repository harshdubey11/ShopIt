import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  deleteItemFromCart,
  fetchCount,
  fetchItemsById,
  resetCart,
  updateCart,
} from "./CartAPI";

const initialState = {
  value: 0,
  items: [],
  status: "idle",
};

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (item) => {
    const response = await addToCart(item);

    return response.data;
  }
);

export const fetchItemsByIdAsync = createAsyncThunk(
  "cart/fetchItemsById",
  async (id) => {
    const response = await fetchItemsById(id);

    return response.data;
  }
);

export const updateCartAsync = createAsyncThunk(
  "cart/updateCart",
  async (update) => {
    const response = await updateCart(update);

    return response.data;
  }
);

export const deleteItemFromCartAsync = createAsyncThunk(
  "cart/deleteItemFromCart",
  async (itemId) => {
    const response = await deleteItemFromCart(itemId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const resetCartAsync = createAsyncThunk(
  "cart/resetCart",
  async (userId) => {
    const response = await resetCart(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(fetchItemsByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemsByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[index] = action.payload;
      })
      .addCase(deleteItemFromCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(resetCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = [];
      });
  },
});

export const { increment } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectCartItems = (state) => state.cart.items;

export default counterSlice.reducer;
