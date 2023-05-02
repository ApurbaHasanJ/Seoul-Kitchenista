import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HeaderBanner from "../../sections/Header/HeaderBanner";

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [chefs, setChefs] = useState([]);

//   header banner data
  useEffect(() => {
    fetch(
      "https://seoul-kitchenista-server-apurbahasanj.vercel.app/banner-food"
    )
      .then((res) => res.json())
      .then((data) => setBanners(data))
      .catch((err) => console.error(err.message));
  }, []);

//   chef data section
useEffect(()=> {
    fetch('https://seoul-kitchenista-server-apurbahasanj.vercel.app/chef')
    .then((res) => res.json())
    .then((data) => setChefs(data))
},[])

  

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

      {/* chef section */}
      <div>
        
      </div>

    </div>
  );
};

export default Home;
