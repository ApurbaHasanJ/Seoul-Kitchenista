import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { ServerData } from "../../layouts/Main/Main";
import { FaThumbsUp } from "react-icons/fa";
import Recipes from "../../sections/Recipes/Recipes";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ChefRecipes = () => {
  // const { id } = useLoaderData();
  const serverData = useContext(ServerData);
  const chefData = useParams();
  // console.log(chefData);
  // console.log(serverData);
  // const [recipes, setRecipes] = useState([]);
  // const [chefs, setChefs] = useState([]);

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  const chef = serverData.find((chef) => chef.id === parseInt(chefData.id));
  // console.log(chef.chef_name);
  const { chef_name, experience, likes, num_recipes, photo, bio } = chef;
  console.log(chef.recipes);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // all about chef recipe
    <div className="mb-20">
      {/* about chef */}
      <h1 className="mb-4 drop-shadow-lg mt-5 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 font-mono md:text-5xl lg:text-6xl dark:text-white">Meet <span className="text-orange-400 dark:text-blue-500">Our Chef</span></h1>
      <div className=" ">
        



      <div className="flex bg-orange-100 lg:p-20 drop-shadow-sm flex-col my-container items-center  border border-gray-200 rounded-lg shadow lg:flex-row max-w-xl lg:max-w-none mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover lg:w-2/4 md:max-w-2xl w-full rounded-lg  "
          src={photo}
          alt="chef img"
        />
        <div className="flex flex-col lg:w-2/4 justify-between p-4 leading-normal">
          <h5 className="mb-5 lg:text-4xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
          <p className=" font-medium text-gray-500 dark:text-gray-400">{bio}</p>
        </div>
      </div>
      </div>

      {/* recipes */}
      <>
        <h1 className="bg-orange-400 py-2 lg:px-2  mt-20 font-mono text-3xl md:ml-12 lg:ml-20 w-56 text-center mr-auto text-white">
          Hot Recipes
        </h1>
        <div className=" flex flex-wrap   my-container gap-9">
          {chef.recipes.map((recipe) => (
            <Recipes key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </>
    </div>
  );
};

export default ChefRecipes;
