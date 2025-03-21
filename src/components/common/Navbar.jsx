import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-stone-900 text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center  relative">
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* All Courses Dropdown */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)} 
            >
              <button className="flex items-center space-x-1">
                <span>All Courses</span>
                <FaChevronDown size={14} />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
  <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md z-50">
    <ul className="py-1">
      {[
        "B.Tech",
        "MBA",
        "M.Tech",
        "MBBS",
        "B.Com",
        "B.Sc",
        "B.Sc (Nursing)",
        "BA",
        "BBA",
        "BCA",
      ].map((course) => (
        <li key={course}>
          <button
            onClick={(e) => e.preventDefault()} // Prevents navigation
            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
          >
            {course}
          </button>
        </li>
      ))}
    </ul>
  </div>
)}
            </div>

            {/* Individual Course Links  okkk*/}
            {[
              "B.Tech",
              "MBA",
              "M.Tech",
              "MBBS",
              "B.Com",
              "B.Sc",
              "BBA",
              "BCA",
            ].map((course) => (
              <a key={course} href="/" className="hover:text-yellow-400">
                {course}
              </a>
            ))}
          </div>

          {/* Right Section - Course Finder */}
          <div className="hidden md:flex items-center space-x-2">
            <FaSearch size={16} />
            <h1 className="text-lg">Course Finder</h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white py-2">
          <div className="px-4">
            {/* Dropdown in Mobile */}
            <button
              className="flex items-center w-full py-2 border-b"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>All Courses</span>
              <FaChevronDown className="ml-2" />
            </button>

            {dropdownOpen && (
              <ul className="mt-2">
                {[
                  "B.Tech",
                  "MBA",
                  "M.Tech",
                  "MBBS",
                  "B.Com",
                  "B.Sc",
                  "B.Sc (Nursing)",
                  "BA",
                  "BBA",
                  "BCA",
                ].map((course) => (
                  <li key={course}>
                    <a href="/" className="block px-4 py-2 hover:bg-gray-700">
                      {course}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {/* Individual Course Links in Mobile */}
            {[
              "B.Tech",
              "MBA",
              "M.Tech",
              "MBBS",
              "B.Com",
              "B.Sc",
              "BBA",
              "BCA",
            ].map((course) => (
              <a
                key={course}
                href="/"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                {course}
              </a>
            ))}

            {/* Course Finder in Mobile */}
            <div className="flex items-center space-x-2 py-2 border-t mt-2">
              <FaSearch size={16} />
              <h1 className="text-lg">Course Finder</h1>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
