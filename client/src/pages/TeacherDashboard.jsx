import React from "react";
import Navbar from "../components/Navbar";
import AssignmentCard from "../components/AssignmentCard";

const TeacherDashboard = () => {
  const assignments = [
    { id: 1, title: "Assignments", submissions: 8, totalGroups: 10 },
    { id: 2, title: "lab Projects", submissions: 5, totalGroups: 10 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {assignments.map((a) => (
            <AssignmentCard key={a.id} assignment={a} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
