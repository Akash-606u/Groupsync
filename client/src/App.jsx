import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Front from "./pages/Front";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
// import GroupDetails from "./pages/GroupDetails";
// import AssignmentDetails from "./pages/AssignmentDetails";

//Backend server URL
export const serverUrl = "http://localhost:8000";

function App() {
  return (
    <>
       {/* Notifications  */}
      <ToastContainer position="top-center" autoClose={2000} />

     
      <Routes>
        
        <Route path="/" element={<Front />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* Student Dashboard & Details */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        {/* <Route path="/group/:id" element={<GroupDetails />} /> */}

        {/* Teacher Dashboard & Details */}
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        {/* <Route path="/assignment/:id" element={<AssignmentDetails />} /> */}
      </Routes>
    </>
  );
}

export default App;
