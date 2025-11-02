import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import GroupCard from "../components/GroupCard";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const groups = [
    { id: 1, name: "Group Alpha", members: 4, progress: 70 },
    { id: 2, name: "Group Beta", members: 3, progress: 45 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <GroupCard
              key={group.id}
              group={group}
              onClick={() => navigate(`/group/${group.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
