import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-orange-50">
      <Navbar />
      <div className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
