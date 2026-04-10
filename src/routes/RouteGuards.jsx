import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />; //redirect to login
  }

  return children;
}

export function PublicRoute({ children }) {
  return children;
}

// Semi-protected: page is public, but logged-in users are redirected.
export function SemiProtectedRoute({ children, redirectTo = "/dashboard" }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />; //redirect to dashboard
  }

  return children;
}
