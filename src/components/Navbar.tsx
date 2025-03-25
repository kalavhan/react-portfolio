
import React from "react";
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
  return (
    <nav className="bg-stone-950 p-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">Portfolio</a>
        <div className="space-x-4">
          <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
