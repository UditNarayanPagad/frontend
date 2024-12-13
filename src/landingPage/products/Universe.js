import React from "react";
import { Link } from "react-router-dom";

const Box = ({image,details}) =>{
  return(
    <div className="w-[25%] flex flex-col gap-3 justify-center items-center p-4 text-center">
          <img src={image} alt="" className="w-[80%] " />
          <p className="text-xs text-zinc-500">
           {details}
          </p>
        </div>
  )
}

const Universe = () => {
  return (
    <div className="text-center">
      <h2 className="text-xl py-16 text-center ">
        Want to know more about our technology stack? Check out the <a href="" className="text-blue-500 hover:text-black font-semibold">Zerodha.tech</a> blog.
      </h2>
      <h1 className="text-4xl font-semibold py-10 text-center">
        The Zerodha Universe
      </h1>
      <p className="text-center">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="flex flex-wrap mx-20 gap-5 justify-center my-10">
        <Box image={"media/images/zerodhaFundhouse.png"} details={"Our asset management venture that is creating simple and transparent index funds to help you save for your goals."} />
        <Box image={"media/images/sensibullLogo.svg"} details={"Our asset management venture that is creating simple and transparent index funds to help you save for your goals."}/>
        <Box image={"\media/images/tijori.svg"} details={"Our asset management venture that is creating simple and transparent index funds to help you save for your goals."}/>
        <Box image={"media/images/streakLogo.png"} details={"Our asset management venture that is creating simple and transparent index funds to help you save for your goals."}/>
        <Box image={"\media/images/smallcaseLogo.png"} details={"Our asset management venture that is creating simple and transparent index funds to help you save for your goals."}/>
        <Box image={"media/images/dittoLogo.png"} details={"Our asset management venture that is creating simple and transparent index funds to help you save for your goals."}/>
      </div>
      <Link to={"/signup"} className='bg-blue-500 py-2 my-10 hover:bg-black hover:text-white text-xl text-white rounded w-60 px-5 mt-9 inline-block'>Sign up for free</Link>
    </div>
  );
};

export default Universe;
