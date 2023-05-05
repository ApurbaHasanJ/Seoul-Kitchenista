import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const FoodItem = ({ foodItem }) => {
  const { name, photo, price, rating, id } = foodItem;
  // console.log(foodItem);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/recipes/${id}`}>
        <img className="rounded-t-lg" src={photo} alt="" />
      </Link>
      <div className="p-5">
        <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <p className=" text-lg font-semibold flex items-center gap-2 text-gray-700 dark:text-gray-400">
            Price:
          <span className="text-orange-600">${price}</span>
        </p>
        <h5 className="mb-4 flex  items-center gap-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Rating: 
            <span className="text-orange-600 mr-auto">{rating}</span>
            <Rating
              placeholderRating={rating}
              emptySymbol={<BsStar className="icon text-white ml-2" />}
              placeholderSymbol={
                <BsStarFill className="icon text-yellow-300 ml-2" />
              }
              fullSymbol={<BsStarHalf className="icon text-yellow-300 pm-1" />}
              readonly
            />
          </h5>
        <button className="inline-flex items-center gap-2 btn px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Order Now
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
