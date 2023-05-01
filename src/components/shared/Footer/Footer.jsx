import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black pt-10 ">
      <div className="my-container grid md:grid-cols-2 lg:flex gap-16 text-white ">
        <div className=" lg:w-6/12">
          <h2 className="text-4xl font-bold mb-6">Seoul Kitchenista</h2>
          <p className="text-base text-gray-400 mb-6">
            Seoul Kitchenista is a Korean restaurant that offers authentic
            Korean cuisine with a focus on locally sourced ingredients and
            traditional cooking techniques. The modern minimalist atmosphere,
            open kitchen and standout dish of bibimbap makes for a delicious,
            immersive dining experience. The restaurant is also committed to
            sustainability and social responsibility.
          </p>
          <div className="flex gap-4">
            {/* <FontAwesomeIcon icon={faFacebookF} /> */}
            <Link to="https://facebook.com/apurbahasanj/">
              <div className="rounded-full w-10 h-10 bg-white">
                <img
                  className="p-2"
                  src="https://i.postimg.cc/d0Yz1tks/facebook.png"
                  alt="fb"
                />
              </div>
            </Link>
            <Link to="https://www.twitter.com/ApurbaHasanJ">
              <div className="rounded-full w-10 h-10 bg-white">
                <img
                  className="p-2"
                  src="https://i.postimg.cc/t4PKpVgv/twitter.png"
                  alt="twitter"
                />
              </div>
            </Link>
            <Link to="https://www.instagram.com/apurbahasanj/">
              <div className="rounded-full w-10 h-10 bg-white">
                <img
                  className="p-2"
                  src="https://i.postimg.cc/rF7BB9qt/instagram.png"
                  alt="instagram"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className=" lg:w-3/12">
          <h2 className="text-xl font-semibold mb-8">Navigate</h2>
          <div className="grid gap-3 text-base text-gray-400">
            <p>Home</p>
            <p>Recipes</p>
            <p>Chefs</p>
            <p>ingredients</p>
            <p>Features</p>
            <p>Competition</p>
          </div>
        </div>
        <div className="lg:w-3/12">
          <h2 className="text-xl font-semibold mb-8">Information</h2>
          <div className="grid gap-3 text-base text-gray-400">
            <p>Contact</p>
            <p>Work with us</p>
            <p>Insights and consultancy</p>
            <p>FAQs</p>
            <p>About us</p>
            <p>Jobs</p>
            <p>Contributors</p>
            <p>Photography</p>
            <p>Policies</p>
          </div>
        </div>
      </div>
      <hr className="mt-9  text-gray-50" />
      <div className="my-container flex justify-between">
        <p className=" text-base  text-gray-400">
        &#169;2023 Seoul Kitchenista. All Rights Reserved
        </p>
        <p className=" text-base  text-gray-400">
          Powered by <span className="text-xl font-semibold">Seoul Kitchenista</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
