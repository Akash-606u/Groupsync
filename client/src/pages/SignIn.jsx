import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { serverUrl } from "../App";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 
 const handleSignIn = async () => {
  if (!email || !password) {
    toast.error("Please fill in all fields!");
    return;
  }

  try {
    const result = await axios.post(
      `${serverUrl}/api/auth/signin`,
      { email, password },
      { withCredentials: true }
    );

    toast.success("Signed in successfully!");

    const user = result.data.user || result.data;

    // based on role
    if (user.role === "student") {
      navigate("/student/dashboard");
    } else if (user.role === "teacher") {
      navigate("/teacher/dashboard");
    } else {
      navigate("/signin");
    }

  } catch (error) {
    toast.error(error.response?.data?.message || "Invalid credentials!");
    console.log(error);
  }
};


  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-2 text-[#d52dff]">GroupSync</h1>
        <p className="text-gray-600 mb-8">
          Sign in to your account to continue.
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>

        

        <button
          className="w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#d52dff] text-white hover:bg-[#d52dff]"
          onClick={handleSignIn}
        >
          Sign In
        </button>

        

        <p className="text-center mt-6 cursor-pointer" onClick={() => navigate("/signup")}>
          Don't have an account? <span className="text-[#d52dff]">Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
