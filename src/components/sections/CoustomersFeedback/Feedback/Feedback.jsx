import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import Rating from "react-rating";

const Feedback = ({ singleFeedback }) => {
  const { id, name, photo, feedback, rating, job } = singleFeedback;

  return (
    <div className="bg-orange-100 text-center rounded-md drop-shadow-lg p-9 h-full flex flex-col">
      <div className=" w-28 h-28 mx-auto mb-7">
        <img
          className="w-full h-full rounded-full object-cover"
          src={photo}
          alt=""
        />
      </div>
      <h5 className="mb-4 flex items-center justify-center text-center gap-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        <Rating
          placeholderRating={rating}
          emptySymbol={<BsStar className="icon text-orange-100 ml-2" />}
          placeholderSymbol={
            <BsStarFill className="icon text-yellow-300 ml-2" />
          }
          fullSymbol={<BsStarHalf className="icon text-yellow-300 pm-1" />}
          readonly
        />
      </h5>
      <div className="h-28  overflow-y-auto">
        <p className="text-slate-800 lg:text-lg text-base">{feedback}</p>
      </div>
      <h3 className="text-black font-bold lg:text-2xl text-lg">{name}</h3>
      <p className="lg:text-lg text-base text-slate-900 font-medium">{job}</p>
    </div>
  );
};

export default Feedback;
