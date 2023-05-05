import React, { useEffect, useState, useRef } from "react";
import Feedback from "../Feedback/Feedback";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./Feedbacks.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("https://seoul-kitchenista-server-apurbahasanj.vercel.app/feedback")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.error(err.message));
  }, []);

  //   console.log(feedbacks);
  return (
    <>
      <div className="my-container">
        <h1 className="lg:text-7xl text-3xl mt-20 mb-3 font-mono uppercase text-center text-slate-800">
          <em className="font-italic">What Our Clients Say</em>
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
      <h1 className="bg-orange-400 py-2 px-6  mt-12 font-mono text-3xl ml-3 md:ml-12 lg:ml-20 inline-block text-center mr-auto text-white">
        Customer Feedback
      </h1>
      <div className="mb-20 my-container">
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {feedbacks.map((singleFeedback) => (
            <SwiperSlide key={singleFeedback.id}>
              <Feedback singleFeedback={singleFeedback} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Feedbacks;
