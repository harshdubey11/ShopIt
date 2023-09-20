import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ProductList from "./features/product-list/ProductList";
import Navbar from "./features/Navbar/Navbar";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Cart from "./features/cart/Cart";
import CartPage from "./pages/CartPage";
import Checkoutpage from "./pages/Checkoutpage";
import ProductDetails from "./features/product-list/Components/ProductDetails";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/Auth/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkoutpage />
      </Protected>
    ),
  },
  {
    path: "/productdetails/:id",
    element: (
      <Protected>
        <ProductDetailPage />
      </Protected>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
