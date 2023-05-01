import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" px-4 py-2 ">
      <div className="my-container relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          
          <img className="lg:h-14 lg:w-14 md:h-7 md:w-7 h-6 w-6" 
          src="https://i.postimg.cc/MpC00ZfX/chef.png" 
          alt="Company Logo" />
          <span className="ml-2 lg:text-3xl md:text-2xl text-xl font-bold tracking-wide text-gray-800">
            Seoul Kitchenista
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center text-xl  hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <FaUser className="text-2xl"/>
          </li>
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden  ">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-7 text-green-700" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10 ">
              <div className="p-5  border rounded shadow-sm bg-orange-100">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                    <img className="md:h-10 md:w-10  h-7 w-7" 
          src="https://i.postimg.cc/MpC00ZfX/chef.png" 
          alt="Company Logo" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                      Seoul Kitchenista
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-7 text-green-700" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4 ">
                    <li>
                      <Link to="/" className={({ isActive }) => (isActive ? "active" : "default")}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className={({ isActive }) => (isActive ? "active" : "default")}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <FaUser className="text-lg"/>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;