
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (

    <nav className="bg-stone-950 w-full pl-6 pr-10">
      <div className="w-full">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Josue Brigido's Portfolio
          </Link>
          <div className="space-x-4 text-sm">
            <Link to="/about" className="text-gray-300">
              About
            </Link>
            <Link to="/projects" className="text-gray-300">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
