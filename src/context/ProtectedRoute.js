import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useVerify } from "./verify-context";

const ProtectedRoute = () => {
  const { isUserVerified, verifyId } = useVerify;
  return isUserVerified ? (
    <Navigate to="/" replace />
  ) : verifyId ? (
    <Navigate to="/verify" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
