import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 p-4 flex justify-between items-center">
    <Link to="/" className="text-2xl font-bold text-white">EduCollab</Link>
    <div className="space-x-4">
      <Link to="/student/dashboard" className="hover:underline">Student</Link>
      <Link to="/teacher/dashboard" className="hover:underline">Teacher</Link>
      <Link to="/signin" className="hover:underline">Logout</Link>
    </div>
  </nav>
);

export default Navbar;
