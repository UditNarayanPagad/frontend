import React from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const NavBar = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (cookies.token) {
      setUser(cookies.token);
    } else {
      setUser(null);
    }
  }, [cookies.token]);
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });
  const Logout = () => {
    removeCookie("token", { path: "/" });
    handleSuccess("User logged out successfully");
    setUser(null);
    navigate("/signup");
  };
  const handelDashboard = ()=>{
     window.location.href = "http://localhost:3001";
  }

  // console.log("User:", user);

  return (
    <div className="h-16 border-[1px] border-zinc-200 fixed bg-white w-full top-0 flex items-center px-20 justify-between">
      <Link to={"/"}>
        <img src="media/images/logo.svg" alt="Logo" className="w-32" />
      </Link>
      <div className="flex gap-8 items-center">
        {user ? (
          <>
            <button
              className="hover:text-blue-600 text-zinc-500"
              onClick={handelDashboard}
            >
              Dashboard
            </button>
            <button
              className="hover:text-blue-600 text-zinc-500"
              onClick={Logout}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link className="hover:text-blue-600 text-zinc-500" to={"/signup"}>
              Signup
            </Link>
            <Link className="hover:text-blue-600 text-zinc-500" to={"/login"}>
              Login
            </Link>
          </>
        )}
        <Link className="hover:text-blue-600 text-zinc-500" to={"/products"}>
          Products
        </Link>
        <Link className="hover:text-blue-600 text-zinc-500" to={"/pricing"}>
          Pricing
        </Link>
        <Link className="hover:text-blue-600 text-zinc-500" to={"/about"}>
          About
        </Link>
        <Link className="hover:text-blue-600 text-zinc-500" to={"/support"}>
          Support
        </Link>
        <i className="fa-solid fa-bars text-xl cursor-pointer"></i>
      </div>
    </div>
  );
};

export default NavBar;
