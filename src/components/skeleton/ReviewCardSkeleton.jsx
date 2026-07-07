import React from "react";

const ReviewSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">

      {/* User */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gray-300"></div>

        <div className="space-y-2">
          <div className="h-4 w-36 bg-gray-300 rounded"></div>
          <div className="h-3 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-2 mt-5">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-5 h-5 rounded bg-gray-300"
          ></div>
        ))}
      </div>

      {/* Review */}
      <div className="space-y-3 mt-5">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-8">
        <div className="h-4 w-20 bg-gray-300 rounded"></div>

        <div className="h-10 w-28 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;