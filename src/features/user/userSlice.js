import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchLoggedInUser,
  fetchLoggedInUserOrders,
  updateUser,
} from "./userAPI";

const initialState = {
  value: 0,
  status: "idle",
  userInfo: null,
  userOrders: [],
};

export const fetchLoggedInUserAsync = createAsyncThunk(
  "user/fetchLoggedInUser",
  async (userId) => {
    const response = await fetchLoggedInUser(userId);

    return response.data;
  }
);

export const fetchLoggedInUserOrdersAsync = createAsyncThunk(
  "user/fetchLoggedInUserOrders",
  async (userId) => {
    const response = await fetchLoggedInUserOrders(userId);

    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async (update) => {
    const response = await updateUser(update);
    return response.data;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userInfo = action.payload;
      })
      .addCase(fetchLoggedInUserOrdersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoggedInUserOrdersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userOrders = action.payload;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userInfo = action.payload;
      });
  },
});

export const selectUserOrders = (state) => state.user.userOrders;
export const selectUserInfo = (state) => state.user.userInfo;

export default userSlice.reducer;
