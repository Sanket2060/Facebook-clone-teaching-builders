import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Post from "./components/post.jsx";
import TotalLikes from "./components/totalLikes.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import FacebookLoginUI from "./components/FacebookLogin.jsx";
import About from "./components/About.jsx";
import FacebookProfileUI from "./components/FacebookProfileUi.jsx";
import {
  ProtectedRoute,
  PublicRoute,
  SemiProtectedRoute,
} from "./routes/RouteGuards.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Login } from "./components/Login.jsx";
import { Signup } from "./components/Signup.jsx";
import { Feed } from "./components/Feed.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <SemiProtectedRoute>
                <Login />
              </SemiProtectedRoute>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <SemiProtectedRoute>
                <Signup />
              </SemiProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <SemiProtectedRoute>
                <FacebookLoginUI mode="login" />
              </SemiProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <SemiProtectedRoute>
                <FacebookLoginUI mode="signup" />
              </SemiProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PublicRoute>
                <About />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <FacebookProfileUI />
              </ProtectedRoute>
            }
          />
          {/* <App /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
