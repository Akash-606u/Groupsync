import React from "react";
import ProgressBar from "./ProgressBar";

const GroupCard = ({ group, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white/10 rounded-2xl p-6 shadow-md cursor-pointer hover:bg-white/20 transition"
  >
    <h2 className="text-xl font-bold mb-2">{group.name}</h2>
    <p className="text-sm text-gray-300 mb-3">{group.members} members</p>
    <ProgressBar value={group.progress} />
  </div>
);

export default GroupCard;
