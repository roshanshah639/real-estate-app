import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-slate-200 to-slate-300 shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="font-semibold text-xl sm:text-2xl tracking-tight">
            <span className="text-slate-600 drop-shadow-md">My</span>
            <span className="text-slate-800 drop-shadow-md">State</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form className="bg-white p-2 rounded-full flex items-center w-32 md:w-52 lg:w-72 shadow-sm hover:shadow-md transition-shadow duration-300">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none px-3 w-full font-medium text-slate-700 placeholder-slate-400"
          />
          <FaSearch className="text-slate-600 hover:text-slate-800 transition-colors duration-200" />
        </form>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-slate-700  text-md hover:text-slate-900 hover:scale-105 transform transition-all duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/projects"
            className="text-slate-700  text-md hover:text-slate-900 hover:scale-105 transform transition-all duration-300 relative group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/about"
            className="text-slate-700  text-md hover:text-slate-900 hover:scale-105 transform transition-all duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/contact"
            className="text-slate-700  text-md hover:text-slate-900 hover:scale-105 transform transition-all duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/sign-in"
            className="text-white  text-sm bg-slate-700 px-8 py-2 rounded-full hover:bg-slate-800 transition-all duration-300 shadow-md"
          >
            Sign In
          </Link>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-slate-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden ${
          isOpen ? "flex" : "hidden"
        } bg-slate-200 px-4 py-6 absolute w-[50%] shadow-lg right-0 justify-center h-screen `}
      >
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="text-slate-700  text-md hover:text-slate-900 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-slate-700  text-md hover:text-slate-900 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-slate-700  text-md hover:text-slate-900 transition-colors duration-200"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-slate-700  text-md hover:text-slate-900 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="/sign-in"
            className="text-white  text-md bg-slate-700 px-8 py-1 pb-1 rounded-full hover:bg-slate-800 transition-all duration-300 text-center"
            onClick={toggleMenu}
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
