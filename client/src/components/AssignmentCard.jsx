import React from "react";

const AssignmentCard = ({ assignment }) => (
  <div className="bg-white/10 rounded-2xl p-6 shadow-md">
    <h2 className="text-xl font-bold mb-2">{assignment.title}</h2>
    <p className="text-gray-300 mb-2">
      Submissions: {assignment.submissions}/{assignment.totalGroups}
    </p>
    <p className="text-sm text-green-400">
      {Math.round((assignment.submissions / assignment.totalGroups) * 100)}% Completed
    </p>
  </div>
);

export default AssignmentCard;
