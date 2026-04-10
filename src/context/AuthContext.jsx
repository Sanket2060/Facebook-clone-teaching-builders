import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://public-feed-api.replit.app";
  const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
  });

  // Check if user is logged in when component mounts
  useEffect(() => {
    checkUserStatus();
  }, []);

  const checkUserStatus = async () => {
    try {
      const response = await api.get("/api/auth/me");
      setUser(response.data);
    } catch (error) {
      console.error("Error checking user status:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email, username, password, fullName) => {
    try {
      const response = await api.post("/api/auth/signup", {
        email,
        username,
        password,
        fullName,
      });
      const userData = response.data;
      setUser(userData);
      return userData;
    } catch (error) {
      const message = error.response?.data?.error || "Signup failed";
      console.error("Signup error:", message);
      throw new Error(message);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await api.post("/api/auth/login", {
        email,
        password,
      });
      const userData = response.data;
      setUser(userData);
      return userData;
    } catch (error) {
      const message = error.response?.data?.error || "Login failed";
      console.error("Login error:", message);
      throw new Error(message);
    }
  };

  const logout = async () => {
    try {
      await api.post("/api/auth/logout");

      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      setUser(null);
    }
  };

  const value = {
    user,
    loading,
    signup,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
