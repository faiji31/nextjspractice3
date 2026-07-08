import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";

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
        <div className="mx-auto  flex gap-5">
           <h2 className="text-white text-2xl">Total Foods: <span className="text-indigo-800">{foods.length}</span> Found</h2>
           <div className="my-4">
            <InputSearch></InputSearch>
           </div>
           <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {
                foods.map(food => <FoodCard key={food.id} food={food} />)
            }
           </div>
           <div className="w-[250px] border-2 rounded-2xl p-4">
                <div className="text-2xl font-bold ">Cart Items:</div> <hr />
                <CartItems  />
           </div>
        </div>
        
    );
};

export default Foods;
