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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
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
              <App />
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
  </StrictMode>,
);
