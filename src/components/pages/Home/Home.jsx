import React, { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HeaderBanner from "../../sections/Header/HeaderBanner";
import Chefs from "../../sections/Chefs/Chefs";
import { ServerData } from "../../layouts/Main/Main";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useLoaderData, useNavigation } from "react-router-dom";
import Event from "../../sections/Events/Event";
import OrderRecipes from "../../sections/OrderNow/OrderRecipes";

const Home = () => {
  const serverData = useContext(ServerData);
  const [isLoading, setIsLoading] = useState(true);
  const [banners, setBanners] = useState([]);
  const navigation = useNavigation();

  // header banner data
  useEffect(() => {
    fetch(
      "https://seoul-kitchenista-server-apurbahasanj.vercel.app/banner-food"
    )
      .then((res) => res.json())
      .then((data) => {
        setBanners(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (navigation.state === "loading" || isLoading) {
    return (
      <div className="min-h-[100vh] pt-96">
        <LoadingSpinner />
      </div>
    );
  }

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
        <div className="my-container">
          <h1 className="lg:text-7xl text-3xl mt-20 mb-3 font-mono uppercase text-center text-slate-800">
            <em className="font-italic">Amazing Team</em>
          </h1>
          <p className=" text-slate-800 font-mono text-center text-2xl dark:text-gray-400">
            <em className="font-italic">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              rerum minima laborum omnis nulla, temporibus cupiditate earum
              aspernatur!
            </em>
          </p>
        </div>
        <h1 className="bg-orange-400 py-2  mt-20 font-mono text-3xl md:ml-12 lg:ml-20 w-56 text-center mr-auto text-white">
          Our Chefs
        </h1>

        {/* All chefs */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mb-20 my-container gap-9 justify-center">
          {serverData.map((chef) => (
            <Chefs key={chef.id} chef={chef} />
          ))}
        </div>
      </>
    </div>
  );
};

export default Home;
