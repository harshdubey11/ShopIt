import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product-list/ProductListSlice";
import authReducer from "../features/Auth/AuthSlice";
import cartReducer from "../features/cart/CartSlice";
import orderReducer from "../features/order/orderSlice";
import userReducer from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    orders : orderReducer,
    user:userReducer
  },
});
