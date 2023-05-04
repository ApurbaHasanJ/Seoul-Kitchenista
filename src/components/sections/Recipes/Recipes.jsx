import React, { useState } from "react";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../../pages/LoadingSpinner/LoadingSpinner";
import { FaArrowRight } from "react-icons/fa";
import {
  BsFillHeartFill,
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import Rating from "react-rating";

const Recipes = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);

  // destructure recipe
  const { photo, name, method, ingredients, rating } = recipe;

  const handleFavorites = () => {
    setFavorite(!favorite);
    console.log(favorite);
  };

  console.log(recipe);
  return (
    <div>
      <div className="max-w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="bg-orange-100 p-10 lg:pb-0 lg:pt-20">
          <img className="rounded-t-lg mx-auto" src={photo} alt="" />
        </div>

        <div className="p-10">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h5 className="mb-4 flex items-center gap-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Rating: {rating}
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

          <div>
            <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
              <div className="mb-1 font-medium text-gray-700 text-lg">
                Ingredients:
              </div>
              {ingredients.map((ingredient) => (
                <span key={ingredient.id}>
                  <li>{ingredient}</li>
                </span>
              ))}
            </p>

            <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
              <div className="mb-1 font-medium text-gray-700 text-lg">
                Method:
              </div>
              {method}
            </p>
          </div>
          <button
  onClick={handleFavorites}
  disabled={favorite}
  className={`inline-flex bg-orange-400 items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-orange-300 ${
    favorite ? "bg-red-600 cursor-not-allowed" : "hover:bg-orange-500"
  }`}
>
  Favorite
  <BsFillHeartFill />
</button>

        </div>
      </div>
    </div>
  );
};

export default Recipes;
