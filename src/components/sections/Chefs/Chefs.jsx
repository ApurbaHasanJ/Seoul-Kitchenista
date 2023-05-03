import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaThumbsUp } from 'react-icons/fa';

const Chefs = ({ chef }) => {
  console.log(chef);
  const { id, chef_name, experience, likes, num_recipes, photo } = chef;
  return (
    <div>
      
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="#">
          <img
            className="rounded-t-lg"
            src={photo}
            alt=""
          />
        </Link>
        <div className="p-5">
          <Link>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {chef_name}
            </h5>
          </Link>
          <p className="mb-1 text-lg font-semibold text-gray-700 dark:text-gray-400">
          Experience: {experience}
          </p>
          <div className="flex justify-between">
          <p className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-400">
            Number of Recipes: {num_recipes}
          </p>
          <p className="mb-3 text-lg font-semibold flex items-center gap-2 text-orange-600  dark:text-gray-400">
          <FaThumbsUp/>
          <span>{likes}</span>
          </p>
          </div>
          <Link
            to={`/chefs-recipes/${id}`}
            className="inline-flex items-center gap-2 btn px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Recipes
            <FaArrowRight/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
