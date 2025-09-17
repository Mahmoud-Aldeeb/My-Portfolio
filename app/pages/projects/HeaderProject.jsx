import React from "react";

const Header = ({ currentTheme, selectedCategory }) => {
  return (
    <div className="text-center mb-16">
      <p
        className={`text-lg ${
          currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
        } max-w-3xl mx-auto`}
      >
        Welcome to my frontend development portfolio. Here you'll find a
        collection of projects showcasing my expertise in modern frontend
        technologies including React, Next.js, jQuery, and responsive web
        design. (Default category: {selectedCategory})
      </p>
    </div>
  );
};

export default Header;
