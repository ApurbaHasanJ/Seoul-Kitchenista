import React from "react";
import { GiBeveledStar, GiBowTie, GiBowTieRibbon } from "react-icons/gi";
import { HiOutlineCake } from "react-icons/hi";
import { SlPeople } from "react-icons/sl";

import {} from "react-icons/gi";

const Event = () => {
  return (
    <div className="my-container h-full">
      <h1 className="lg:text-7xl text-3xl mt-20 mb-3 font-mono uppercase text-center text-slate-800">
        <em className="font-italic">Best Service Ever</em>
      </h1>
      
      <p className=" text-slate-800 font-mono text-center lg:text-2xl md:text-lg text-base dark:text-gray-400">
        <em className="font-italic"> Our 3 Michelin Stars ensure that your experience regarding our cuisine
        will be one that you will not forget.</em>
      </p>
      <div className="lg:text-4xl text-lg mt-4 flex justify-center">
        <GiBeveledStar />
        <GiBeveledStar />
        <GiBeveledStar />
      </div>

      {/* Events */}
      <div className=" grid lg:grid-cols-3 justify-items-center gap-4 mx-auto">
        <div className="text-center">
          <div className="lg:h-96 lg:w-96 w-56 h-56 flex items-center justify-center mx-auto">
            <div className="bg-black mx-auto lg:text-5xl duration-700 text-lg rounded-full flex justify-center items-center hover:lg:text-6xl hover:text-2xl lg:w-52 lg:h-52 hover:lg:w-60 hover:lg:h-60 hover:w-28 hover:h-28 w-20 h-20 text-yellow-500 ">
              <HiOutlineCake />
            </div>
          </div>
          <h1 className="font-mono lg:text-4xl md:text-3xl text-2xl text-center mb-2">Birthdays</h1>
          <p className="lg:text-lg text-base mb-2 text-gray-500 dark:text-gray-400 text-center">
            Book a table for two with the best Italian dishes served for the
            anniversary. Or reserve a bigger one for a huge family to get
            together one sunny day. Gather your friends together
          </p>
        </div>
        <div className="text-center">
          <div className="lg:h-96 lg:w-96 w-56 h-56 flex items-center justify-center mx-auto">
            <div className="bg-black mx-auto duration-700 lg:text-5xl text-lg rounded-full flex justify-center items-center hover:lg:text-6xl hover:text-2xl lg:w-52 lg:h-52 hover:lg:w-60 hover:lg:h-60 hover:w-28 hover:h-28 w-20 h-20 text-yellow-500 ">
              <SlPeople />
            </div>
          </div>
          <h1 className="font-mono lg:text-4xl md:text-3xl text-2xl text-center mb-2">Meetings</h1>
          <p className="lg:text-lg text-base mb-2 text-gray-500 dark:text-gray-400 text-center">
            You can also impress your boss by choosing the best place for
            corporate party with your co-workers. Reserve a spacious room, set
            the menu, choose the drinks and invite guests.
          </p>
        </div>
        <div className="text-center">
          <div className="lg:h-96 lg:w-96 w-56 h-56 flex items-center justify-center mx-auto">
            <div className="bg-black mx-auto duration-700 lg:text-5xl text-lg rounded-full flex justify-center items-center hover:lg:text-6xl hover:text-2xl lg:w-52 lg:h-52 hover:lg:w-60 hover:lg:h-60 hover:w-28 hover:h-28 w-20 h-20 text-yellow-500 ">
              <GiBowTieRibbon />
            </div>
          </div>
          <h1 className="font-mono lg:text-4xl md:text-3xl text-2xl text-center mb-2">Weddings</h1>
          <p className="lg:text-lg text-base mb-2 text-gray-500 dark:text-gray-400 text-center">
            75 seats for 75 guests are all at your disposal. Organize a party
            for a huge company and have fun in the restaurant. Show your friends
            the real world of European cuisine and especially Italian vibes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
