import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import HomePage from "./Home/HomePage";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="h-[60vh] text-4xl text-black flex flex-col gap-10 justify-center items-center font-semibold ">
        404 Page not found!
        <p className="text-xl text-center">
          We couldn't find the page you were looking for.{" "}
          <Link to={"/"} className="text-blue-600">
            Visit Zerodha's home page
          </Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
