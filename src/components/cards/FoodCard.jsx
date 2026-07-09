import Link from "next/link";
import React from "react";
import CartButton from "../button/CartButton";
import Image from "next/image";

const FoodCard = ({ food ,id}) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border bg-white hover:shadow-2xl transition duration-300">
      {/* Food Image */}
      {/* <img
        src={food.foodImg}
        alt={food.title}
        className="w-full h-56 object-cover"
      /> */}
      <Image width={300} height={150} src={food.foodImg}
        alt={food.title} className="object-cover" />

      {/* Card Body */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">{food.title}</h2>

        <p className="text-gray-500 mt-2">
          Category:{" "}
          <span className="font-semibold text-green-600">
            {food.category}
          </span>
        </p>

        <p className="text-2xl font-bold text-orange-500 mt-3">
          ${food.price}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <Link href={`/foods/${food.id}`} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            View Details
          </Link>

          <CartButton food={food} />

          
        </div>
      </div>
    </div>
  );
};

export default FoodCard;