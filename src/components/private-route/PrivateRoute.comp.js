import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuth = true;
export const PrivateRoute = ({ ...rest }) => {
  return { ...rest }, isAuth ? <Outlet /> : <Navigate to="/" />;
};
