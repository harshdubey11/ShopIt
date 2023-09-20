import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product-list/ProductListSlice";
import authReducer from "../features/Auth/AuthSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
});
