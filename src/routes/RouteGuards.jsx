import React from "react";
import { Navigate } from "react-router";

const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

export function ProtectedRoute({ children }) {
  if (!isLoggedIn()) {
    return <Navigate to="/" replace />; //redirect to login
  }

  return children;
}

export function PublicRoute({ children }) {
  return children;
}

// Semi-protected: page is public, but logged-in users are redirected.
export function SemiProtectedRoute({ children, redirectTo = "/dashboard" }) {
  if (isLoggedIn()) {
    return <Navigate to={redirectTo} replace />; //redirect to dashboard
  }

  return children;
}
