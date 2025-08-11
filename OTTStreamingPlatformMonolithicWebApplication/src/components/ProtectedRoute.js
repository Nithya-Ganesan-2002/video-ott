import React from "react";
import { Navigate } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * ProtectedRoute only renders children if authenticated, otherwise redirects to login.
 * @param {Object} props 
 * @param {boolean} props.isAuthenticated - If user is authenticated
 * @param {JSX.Element} props.children - Child page/component
 */
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
