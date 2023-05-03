import React, { createContext } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";

export const ServerData = createContext()
const Main = () => {
  const chefsData = useLoaderData()
  // console.log(chefsData);
  return (
    <div className="bg-orange-50">
      <ServerData.Provider value={chefsData}>
      <Navbar />
      <div className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </div>
      <Footer />
      </ServerData.Provider>
    </div>
  );
};

export default Main;
