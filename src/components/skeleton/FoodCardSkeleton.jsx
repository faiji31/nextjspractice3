import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border bg-white animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-56 bg-gray-300"></div>

      {/* Content Skeleton */}
      <div className="p-5">
        <div className="h-6 w-3/4 bg-gray-300 rounded"></div>

        <div className="h-4 w-1/2 bg-gray-300 rounded mt-4"></div>

        <div className="h-6 w-1/3 bg-gray-300 rounded mt-4"></div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <div className="flex-1 h-10 bg-gray-300 rounded-lg"></div>
          <div className="flex-1 h-10 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;