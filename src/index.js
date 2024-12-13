import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landingPage/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./landingPage/signup/Signup";
import AboutPage from "./landingPage/about/AboutPage";
import ProductPage from "./landingPage/products/ProductPage";
import PricingPage from "./landingPage/pricing/PricingPage";
import SupportPage from "./landingPage/support/SupportPage";
import NotFound from "./landingPage/NotFound";
import Login from "./landingPage/login/Login";
require("react-toastify/dist/ReactToastify.css");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);
