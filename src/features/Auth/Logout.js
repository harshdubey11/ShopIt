import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUserAsync, selectLoggedInUser } from "./AuthSlice";
import { Navigate } from "react-router-dom";

function Logout() {
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LogoutUserAsync());
  });

  return <div>{!user && <Navigate to="/login" replace={true}></Navigate>}</div>;
}

export default Logout;
