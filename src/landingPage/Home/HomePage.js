import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const HomePage = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      // if (!cookies.token) {
      //   navigate("/login");
      // }
      const { data } = await axios.get(
        "http://localhost:3002/user",
        { withCredentials: true }
      );
      setUsername(data.username);
      return data.username
        ? toast(`Hello ${data.username}, Check your Dashboard`, {
            position: "top-right",
          })
        : toast(`Create account or login to see Dashboard`, {
          position: "top-right",
        })
        // : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  
  return (
    <>
    <NavBar/>
    <Hero/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education/>
    <OpenAccount/>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default HomePage