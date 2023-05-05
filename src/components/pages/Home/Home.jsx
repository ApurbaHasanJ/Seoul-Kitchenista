import React, { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HeaderBanner from "../../sections/Header/HeaderBanner";
import Chefs from "../../sections/Chefs/Chefs";
import { ServerData } from "../../layouts/Main/Main";
import Event from "../../sections/Events/Event";
import OrderRecipes from "../../sections/OrderNow/OrderRecipes";
import { useLoaderData } from "react-router-dom";
import Feedbacks from "../../sections/CoustomersFeedback/Feedbacks/Feedbacks";

const Home = () => {
  const banners = useLoaderData()
  console.log(banners);
  const serverData = useContext(ServerData);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header Banner section */}
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
        useKeyboardArrows={true}
        emulateTouch={true}
      >
        {banners.map((banner) => (
          <HeaderBanner banner={banner} key={banner.id} />
        ))}
      </Carousel>

      {/* home body section */}
      <>
        {/* Event section */}
        <Event />

        {/* Our Recipes */}
        <OrderRecipes />

        {/* chef section */}

        <div className="my-container">
          <h1 className="lg:text-7xl text-3xl mt-20 mb-3 font-mono uppercase text-center text-slate-800">
            <em className="font-italic">Amazing Team</em>
          </h1>
          <p className=" text-slate-800 font-mono text-center lg:text-2xl md:text-lg text-base dark:text-gray-400">
            <em className="font-italic">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              rerum minima laborum omnis nulla, temporibus cupiditate earum
              aspernatur!
            </em>
          </p>
        </div>
        <h1 className="sub-header">
          Our Chefs
        </h1>

        {/* All chefs */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mb-20 my-container gap-9 justify-center">
          {serverData.map((chef) => (
            <Chefs key={chef.id} chef={chef} />
          ))}
        </div>

        {/* Customers Feedbacks */}
        <Feedbacks/>
      </>

    </>
  );
};

export default Home;
