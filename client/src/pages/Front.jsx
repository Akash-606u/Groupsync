import React from "react";
import { Users, GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Navbar */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">GroupSync</span>
            </div>
            <button
              onClick={() => navigate("/signin")}
              className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all backdrop-blur-sm border border-white/30"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-6">
            Collaborative Learning <br /> Made Simple
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Empower students to form groups, manage assignments, and track
            progress while professors oversee everything seamlessly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Student Section */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-2xl transform transition-all hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Student Corner
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Join groups, collaborate with peers, submit assignments, and
                track your academic progress all in one place.
              </p>
              <button
                onClick={() => navigate("/signup", { state: { role: "student" } })}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg transform transition-all hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Teacher Section */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-2xl transform transition-all hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Teacher Corner
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Create assignments, monitor group activities, track submissions,
                and manage your courses effortlessly.
              </p>
              <button
                onClick={() => navigate("/signup", { state: { role: "teacher" } })}
                className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg transform transition-all hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
