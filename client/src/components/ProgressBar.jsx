import React from "react";

const ProgressBar = ({ value }) => (
  <div className="w-full bg-gray-700 rounded-full h-3">
    <div
      className="bg-gradient-to-r from-blue-400 to-cyan-500 h-3 rounded-full"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

export default ProgressBar;
