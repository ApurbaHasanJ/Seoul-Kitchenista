import React from "react";
import './HeaderBanner.css'

const HeaderBanner = ({ banner }) => {
  const { id, name, image, description } = banner;
  return (
    <>
      <img className="relative img"  src={image} alt="" />
      <h2
        className="absolute lg:top-10 md:top-5 top-2 drop-shadow-2xl lg:text-5xl md:text-3xl text-xl text-white font-mono"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        Delicious recipes awaiting
      </h2>
      <div
        className="absolute drop-shadow-2xl lg:left-12 left-2 text-left lg:w-1/2"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <h2 className="mb-3 lg:text-7xl md:text-5xl text-xl font-serif text-white">
          {name}
        </h2>
        <p className="mb-3 text-gray-100 lg:text-lg pr-1 drop-shadow-2xl">{description}</p>
        <button className="btn">Learn More</button>
      </div>
    </>
  );
};

export default HeaderBanner;
