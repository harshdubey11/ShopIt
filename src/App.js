import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';
import Navbar from './features/Navbar/Navbar';
import Home from './pages/Home';
import SignUpPage from './pages/SignUpPage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
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
