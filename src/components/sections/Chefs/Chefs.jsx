import React from "react";
import "./Chefs.css";
import { Link, useNavigation } from "react-router-dom";
import { FaArrowRight, FaThumbsUp } from "react-icons/fa";
import LoadingSpinner from "../../pages/LoadingSpinner/LoadingSpinner";
import LazyLoad from "react-lazy-load";

const Chefs = ({ chef }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  // console.log(chef);
  const { id, chef_name, experience, likes, num_recipes, photo } = chef;
  return (
    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/recipes/${id}`}>
        <LazyLoad threshold={0.99}>
          <img className="rounded-t-lg" src={photo} alt="" />
        </LazyLoad>
      </Link>
      <div className="p-5">
        <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {chef_name}
        </h5>

        <p className=" text-lg font-semibold text-gray-700 dark:text-gray-400">
          Experience: {experience}
        </p>
        <div className="flex mb-5 justify-between">
          <p className=" text-lg font-semibold text-gray-700 dark:text-gray-400">
            Number of Recipes: {num_recipes}
          </p>
          <p className=" text-lg font-semibold flex items-center gap-2 text-orange-600  dark:text-gray-400">
            <FaThumbsUp />
            <span>{likes}</span>
          </p>
        </div>
        <Link
          to={`/recipes/${id}`}
          className="inline-flex items-center gap-2 btn px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Recipes
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Chefs;
