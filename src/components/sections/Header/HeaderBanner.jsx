import React from "react";
import "./HeaderBanner.css";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../../pages/LoadingSpinner/LoadingSpinner";

const HeaderBanner = ({ banner }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <div className="min-h-[100vh] pt-96">
        <LoadingSpinner />
      </div>
    );
  }
  const { id, name, image, description } = banner;
  return (
    <>
      {/* about banner food */}
      <img className="relative img transition-all duration-300  blur-sm hover:blur-none" src={image} alt="" />
      <h2
        className="absolute lg:top-10 md:top-5 top-2 drop-shadow-2xl lg:text-5xl md:text-3xl text-xl text-white font-mono"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        Delicious recipes awaiting
      </h2>
      <div
        className="absolute drop-shadow-2xl lg:left-12 left-2 top-2/4 lg:top-1/3 text-left lg:w-1/2"
        style={{ transform: "translateY(-60%)" }}
      >
        <h2 className="mb-3 lg:text-7xl md:text-5xl text-xl font-serif text-white">
          {name}
        </h2>
        <p className="mb-3 text-gray-100 mt-4 lg:mt-0 text-xs md:text-base lg:text-lg pr-1 drop-shadow-2xl">
          {description}
        </p>
        <button className="btn">Learn More</button>
      </div>

      {/* our special */}
      <div className="hidden lg:block absolute bottom-12">
        {/* Burger */}
        <div className="flex gap-5 absolute bottom-12 left-20 ">
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
        <div className="flex flex-row-reverse gap-5 absolute bottom-12 right-20">
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
    </>
  );
};

export default HeaderBanner;
