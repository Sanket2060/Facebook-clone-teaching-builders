import React from "react";
import { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";
const TotalLikes = ({ totalLikes }) => {
  // const { theme, setThemeValue } = useContext(ThemeContext);
  // console.log("theme is:", theme);
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-medium text-sm">
      <span className="text-lg">❤️</span>
      <span>{totalLikes} Likes</span>
    </div>
  );
};

export default TotalLikes;
