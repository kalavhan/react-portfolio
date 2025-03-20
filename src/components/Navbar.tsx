import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="text-xl font-bold">Portfolio</Link>
      <div className="space-x-4">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
