import React from "react";

const TotalLikes = ({ totalLikes }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-medium text-sm">
      <span className="text-lg">❤️</span>
      <span>{totalLikes} Likes</span>
    </div>
  );
};

export default TotalLikes;