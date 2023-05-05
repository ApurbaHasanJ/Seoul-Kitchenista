import React, { useEffect, useState } from "react";
import FoodItem from "../../shared/FoodItem/FoodItem";
import { FaArrowRight } from "react-icons/fa";

const OrderRecipes = () => {
  const [foodItems, setFoodItems] = useState([]);

  // food items
  useEffect(() => {
    fetch("https://seoul-kitchenista-server-apurbahasanj.vercel.app/food-items")
      .then((res) => res.json())
      .then((data) => setFoodItems(data))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className=" mt-20">
      <h1 className="lg:text-7xl text-3xl font-mono uppercase text-center text-slate-800">
        <em className="font-italic">OUR MENU</em>
      </h1>
      <p className=" text-slate-800 font-mono text-center lg:text-2xl md:text-lg text-base dark:text-gray-400">
        <em className="font-italic">Seoul Kitchenista's tasty offer</em>
      </p>

      {/* food Items */}
      <>
        <h1 className="bg-orange-400 py-2 px-6  mt-12 font-mono text-3xl ml-3 md:ml-12 lg:ml-20 inline-block text-center mr-auto text-white">
          Hot Recipes
        </h1>
        <div className="my-container grid lg:grid-cols-3 justify-center gap-10">
          {foodItems.map((foodItem) => (
            <FoodItem key={foodItem.id} foodItem={foodItem} />
          ))}
        </div>
        <div className="my-container flex justify-end">
        <button className=" flex items-center gap-2 btn px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-self-end">
          See More
          <FaArrowRight />
        </button>
        </div>
      </>
    </div>
  );
};

export default OrderRecipes;
