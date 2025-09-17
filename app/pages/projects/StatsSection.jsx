import React from "react";

const StatsSection = ({ data, currentTheme }) => {
  return (
    <div
      className={`text-center py-16 border-t ${
        currentTheme === "dark"
          ? "border-gray-800 bg-gray-800/50"
          : "border-gray-200 bg-gray-50"
      } rounded-3xl`}
    >
      <h2
        className={`text-3xl font-bold ${
          currentTheme === "dark" ? "text-white" : "text-gray-800"
        } mb-12`}
      >
        Frontend Skills Overview
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div
            className={`text-4xl font-bold ${
              currentTheme === "dark" ? "text-blue-400" : "text-blue-600"
            } mb-2`}
          >
            {data.length}
          </div>
          <div
            className={`font-medium ${
              currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Frontend Projects
          </div>
        </div>
        <div className="text-center">
          <div
            className={`text-4xl font-bold ${
              currentTheme === "dark" ? "text-green-400" : "text-green-600"
            } mb-2`}
          >
            15+
          </div>
          <div
            className={`font-medium ${
              currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies
          </div>
        </div>
        <div className="text-center">
          <div
            className={`text-4xl font-bold ${
              currentTheme === "dark" ? "text-yellow-400" : "text-yellow-600"
            } mb-2`}
          >
            100%
          </div>
          <div
            className={`font-medium ${
              currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Responsive Design
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
