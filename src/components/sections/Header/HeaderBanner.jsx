import React from "react";
import "./HeaderBanner.css";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../../pages/LoadingSpinner/LoadingSpinner";

import { FaArrowRight } from "react-icons/fa";

const HeaderBanner = ({ banner }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  } 
  const { id, name, image, description } = banner;
  // console.log(image);
  return (
    <div
      className="relative bg-center bg-cover lg:h-screen h-96"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30 hover:opacity-0 duration-700"></div>
      {/* banner description */}
      <div
        className="absolute drop-shadow-2xl top-1/2  lg:top-1/3 text-center left-1/2 lg:w-1/2"
        style={{ transform: "translate(-50%,-50%)" }}
      >
        <h2 className="mb-3 lg:text-7xl md:text-5xl text-xl font-serif text-white">
          {name}
        </h2>
        <p className="mb-3 text-gray-100 mt-4 lg:mt-0 text-xs md:text-base lg:text-lg pr-1 drop-shadow-2xl">
          {description}
        </p>
        <button className="btn grid gap-2"><span>Order Now</span>
        <FaArrowRight/></button>
      </div>

      {/* our special */}
      <div className="hidden lg:block absolute bottom-12">
        {/* Burger */}
        <div className="flex gap-5 absolute bottom-12 md:left-8 lg:left-14 ">
          <div className="w-96">
            <img
              src="https://i.postimg.cc/xCgqkk7k/side-view-burger-with-minced-meat-caramelized-onion-sesame-seeds-lettuce-burger-bun-sauces-table.jpg"
              alt="Burger"
            />
          </div>
          <div className="text-white text-left">
            <h4 className="text-3xl mb-1 font-mono font-medium">Burgers</h4>
            <h3 className="text-xl font-semibold">
              Tomato Stuffing with Cumin and Radish
            </h3>
          </div>
        </div>

        {/* Pizza */}
        <div className="flex flex-row-reverse gap-5 absolute bottom-12 md:right-8 lg:right-14">
          <div className="w-96">
            <img
              src="https://i.postimg.cc/kXGRbc77/mixed-pizza-with-various-ingridients.jpg"
              alt="Pizza"
            />
          </div>
          <div className="text-white text-right">
            <h4 className="text-3xl mb-1 font-mono font-medium">Pizzas</h4>
            <h3 className="text-xl font-semibold ">
              Tomato Stuffing with Cumin and Radish
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
