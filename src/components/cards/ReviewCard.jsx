import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={review.photo}
          alt={review.user}
          className="w-14 h-14 rounded-full object-cover border-2 border-orange-400"
        />

        <div>
          <h2 className="font-bold text-lg">{review.user}</h2>
          <p className="text-gray-500 text-sm">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mt-4">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-2xl ${
              index < review.rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-700 mt-4 leading-7">
        {review.review}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6 border-t pt-4">
        <p className="text-sm text-gray-500">
          ❤️ {review.likes.length} Likes
        </p>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;