import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import './Register.css'
import useTitle from "../../../hooks/useTitle";

const Register = () => {
  useTitle('Register')
  const [show, setShow] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()

  // get redirect path
  const path = location?.state?.from?.pathname || '/'

  //   const [confirmShow, setConfirmShow] = useState(false);
  const { createUser, userProfile, continueWithGoogle, continueWithGithub } =
    useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // if (password.length < 6) {
    //   toast.error("Password must be at least 6 characters");
    // }

    createUser(email, password)
      .then((result) => {
        userProfile(name, photo);
        const loggedUser = result.user;
        toast.success("Sign Up Successfully");
        form.reset();
        // console.log(loggedUser);
        navigate(path, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message.split("auth/")[1].slice(0, -2));
      });
  };

  //   continue with Google
  const googleSignIn = () => {
    continueWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Sign in Successfully");
        console.log(loggedUser);
        navigate(path, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //   continue with github
  const githubSignIn = () => {
    continueWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Sign in Successfully");
        console.log(loggedUser);
        navigate(path, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-20">
      <h3 className=" text-2xl text-slate-900 text-center font-bold border-b pb-5 mb-5">
        Register your account
      </h3>
      <div className="my-container md:w-4/6 lg:w-3/6 ">
        <form onSubmit={handleSignUp} className="bg-orange-100 p-12 rounded-lg">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-md font-medium text-slate-900 dark:text-white"
            >
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border p-4  border-gray-300 text-gray-900  rounded-lg focus:ring-orange-300 focus:border-orange-300 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-md dark:text-white dark:focus:ring-orange-300 dark:focus:border-orange-300"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="photo"
              className="block mb-2 text-md font-medium text-slate-900 dark:text-white"
            >
              Your photo url (optional)
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              className="bg-gray-50 border p-4  border-gray-300 text-gray-900  rounded-lg focus:ring-orange-300 focus:border-orange-300 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-md dark:text-white dark:focus:ring-orange-300 dark:focus:border-orange-300"
              placeholder="https://exaple.jpg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-slate-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border p-4  border-gray-300 text-gray-900  rounded-lg focus:ring-orange-300 focus:border-orange-300 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-md dark:text-white dark:focus:ring-orange-300 dark:focus:border-orange-300"
              placeholder="Your email address"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-md font-medium text-slate-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type={show ? "text" : "password"}
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-300 focus:border-orange-300 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-300 dark:focus:border-orange-300"
              required
              placeholder="Password"
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="showPassword"
                type="checkbox"
                value={show}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300  dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 "
                onChange={(e) => setShow(e.target.checked)}
              />
            </div>
            <label
              htmlFor="showPassword"
              className="ml-2 text-sm font-medium text-slate-900 dark:text-gray-300"
            >
              Show password
            </label>
          </div>
          <button
            type="submit"
            className="text-white btn focus:ring-orange-300 focus:ring-4 focus:outline-none flex justify-center w-full font-medium rounded-lg "
          >
            Register
          </button>
        </form>
        <div className="mb-4">
          <p className="text-center text-gray-700 mt-2">
            Already Have An Account ?{" "}
            <Link to="/login" className="text-red-700 hover:underline">
              Login
            </Link>
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="border-b h-1 w-full border-gray-300"></div>
          <span>or</span>
          <div className="border-b h-1 w-full border-gray-300"></div>
        </div>
        <div className="form-control  mt-4">
          <button
            onClick={googleSignIn}
            className=" w-full  bg-orange-200 p-2 rounded drop-shadow-lg text-base flex justify-center items-center border-gray-300 gap-2 hover:bg-secondary hover:bg-orange-300 text-black"
          >
            <img
              className="w-7 h-7"
              src="https://i.postimg.cc/4NhHcV5v/google.png"
              alt=""
            />
            <span className="capitalize ">Continue With Google</span>
          </button>
        </div>
        <div className="form-control  mt-4">
          <button
            onClick={githubSignIn}
            className=" w-full bg-slate-200 p-2 rounded drop-shadow-lg text-base flex justify-center items-center border-gray-300 gap-2 hover:bg-secondary hover:bg-slate-300 text-black"
          >
            <img
              className="w-7 h-7"
              src="https://i.postimg.cc/wjSV0NTd/github.png"
              alt=""
            />
            <span className="capitalize ">Continue With Github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
