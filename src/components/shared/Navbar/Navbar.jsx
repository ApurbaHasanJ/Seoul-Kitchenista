import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import LoadingSpinner from "../../pages/LoadingSpinner/LoadingSpinner";

const Navbar = () => {
  const { user, logOut} = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle Logout
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err.message);
      });
  };

  // console.log(user);

  return (
    <div className=" px-4 py-2 ">
      <div className="my-container relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <img
            className="lg:h-14 lg:w-14 md:h-10 md:w-10 h-7 w-7"
            src="https://i.postimg.cc/MpC00ZfX/chef.png"
            alt="Company Logo"
          />
          <span className="ml-2 text-slate-900 lg:text-3xl md:text-2xl text-xl font-bold tracking-wide ">
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
          {user && (
            <li>
              {user.photoURL ? (
                <img
                  className="lg:w-13 lg:h-13 md:h-10 md:w-10 h-7 w-7 rounded-full"
                  title={user.displayName}
                  src={user.photoURL}
                  alt="User.png"
                />
              ) : (
                <FaUser className="text-2xl" />
              )}
            </li>
          )}
          {user ? (
            <Link onClick={handleLogout} className="btn">
              Log Out
            </Link>
          ) : (
            <li>
              <Link to="/login" className="btn">
                Login
              </Link>
            </li>
          )}
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
                      <img
                        className="md:h-10 md:w-10  h-7 w-7"
                        src="https://i.postimg.cc/MpC00ZfX/chef.png"
                        alt="Company Logo"
                      />
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
                      <Link
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Blog
                      </Link>
                    </li>
                    {user && (
                      <li>
                        {user.photoURL ? (
                          <img
                            className="lg:w-13 lg:h-13 md:h-10 md:w-10 h-7 w-7 rounded-full"
                            title={user.displayName}
                            src={user.photoURL}
                            alt="User.png"
                          />
                        ) : (
                          <FaUser className="text-2xl" />
                        )}
                      </li>
                    )}

                    {user ? (
                      <Link onClick={handleLogout} className="btn">
                        Log Out
                      </Link>
                    ) : (
                      <li>
                        <Link to="/login" className="btn">
                          Login
                        </Link>
                      </li>
                    )}
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
