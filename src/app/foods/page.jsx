import FoodCard from "@/components/cards/FoodCard";
import React from "react";

const getFoods = async () => {
    const res = await fetch(
        "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
    );

    const data = await res.json();
    await new Promise((resolve)=> setTimeout(resolve,3000))
    return data.foods || [];
};

const Foods = async () => {
    const foods = await getFoods();

    return (
        <div className="mx-auto max-w-7xl">
           <h2 className="text-white text-2xl">Total Foods: <span className="text-indigo-800">{foods.length}</span> Found</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {
                foods.map(food => <FoodCard key={food._id} food={food} />)
            }
           </div>
        </div>
        
    );
};

export default Foods;
