import React, { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HeaderBanner from "../../sections/Header/HeaderBanner";
import Chefs from "../../sections/Chefs/Chefs";
import { ServerData } from "../../layouts/Main/Main";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useNavigation } from "react-router-dom";
import Event from "../../sections/Events/Event";
import OrderRecipes from "../../sections/OrderNow/OrderRecipes";

const Home = () => {
  const serverData = useContext(ServerData);
  const [banners, setBanners] = useState([]);

  // header banner data
  useEffect(() => {
    fetch(
      "https://seoul-kitchenista-server-apurbahasanj.vercel.app/banner-food"
    )
      .then((res) => res.json())
      .then((data) => setBanners(data))
      .catch((err) => console.error(err.message));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
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

      {/* Event section */}
      <Event />

      {/* Our Recipes */}
      <OrderRecipes />

      {/* chef section */}
      <>
        <h1 className="bg-orange-400 py-2  mt-20 font-mono text-3xl md:ml-12 lg:ml-20 w-56 text-center mr-auto text-white">
          Our Chefs
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto my-container gap-9">
          {serverData.map((chef) => (
            <Chefs key={chef.id} chef={chef} />
          ))}
        </div>
      </>
    </div>
  );
};

export default Home;
