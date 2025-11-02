
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { serverUrl } from "../App";

function SignUp() {
  const location = useLocation();
  const prefilledRole = location.state?.role || "student"; // default role from landing page

  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState(prefilledRole);
  const navigate = useNavigate();

 
  const handleSignUp = async () => {
    if (!fullName || !email || !password || !mobile || !role) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/signup`,
        { fullName, email, password, mobile, role },
        { withCredentials: true }
      );

      
      const user = result.data.user || result.data;

      toast.success("Account created successfully!");

      //  based on role
      if (user.role === "student") {
        navigate("/student/dashboard");
      } else if (user.role === "teacher") {
        navigate("/teacher/dashboard");
      } else {
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-2 text-[#804aba]">GroupSync</h1>
        <p className="text-gray-600 mb-8">
          Create your account to get started.
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none"
            placeholder="Enter your full name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </div>

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

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none"
            placeholder="Enter your phone number"
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
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

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Role</label>
          <div className="flex gap-2">
            {["student", "teacher"].map((r) => (
              <button
                key={r}
                type="button"
                className={`flex-1 border rounded-lg px-3 py-2 text-center font-medium transition-colors cursor-pointer ${
                  role === r
                    ? "bg-[#743bee] text-white"
                    : "border border-[#743bee] text-[#743bee]"
                }`}
                onClick={() => setRole(r)}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>
        </div>

       
        <button
          className="w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#743bee] text-white hover:bg-[#5c2ec2]"
          onClick={handleSignUp}
        >
          Sign Up
        </button>

        <p
          className="text-center mt-6 cursor-pointer"
          onClick={() => navigate("/signin")}
        >
          Already have an account?{" "}
          <span className="text-[#743bee]">Sign In</span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
