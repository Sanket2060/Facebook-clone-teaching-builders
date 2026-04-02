import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Post from "./components/post.jsx";
import TotalLikes from "./components/totalLikes.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import FacebookLoginUI from "./components/FacebookLogin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FacebookLoginUI />} />
        <Route path="/dashboard" element={<App />} />
        {/* <App /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
