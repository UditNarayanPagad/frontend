import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { email, password, username },
        { withCredentials: true }
      );
      const { success, message, user } = data;
      console.log("signup",user)

      const handleError = (err) =>
        toast.error(err, {
          position: "bottom-left",
        });
      const handleSuccess = (msg) =>
        toast.success(msg, {
          position: "bottom-right",
        });

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    // console.log("Signup:", { email, password, username });
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 pt-4 rounded-lg shadow-lg w-80">
        <Link to={"/"}>
          <img src="media\images\logo.svg" alt="" className="w-24 mb-3" />
        </Link>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-2 text-sm text-zinc-500 text-center">
          Already have an account{" "}
          <Link
            className="font-semibold hover:text-black text-blue-500"
            to={"/login"}
          >
            Log in
          </Link>
        </p>
        <p className="mt-2 text-sm text-zinc-500 text-center">
          Back to{" "}
          <a
            className="font-semibold hover:text-black text-blue-500"
           href="/"
          >
            Home
          </a>{" "}
          page{" "}
        </p>
      </div>
      <ToastContainer className="h-16"/>
    </div>
  );
}

export default Signup;
