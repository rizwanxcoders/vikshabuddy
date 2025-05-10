import React, { useState } from "react";
import {
  FaBell,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaMapMarkerAlt,
  FaPen,
} from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

import { PiDotsNineBold } from "react-icons/pi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white  w-full z-50 shadow-md">
        <div className="bg-gradient-to-l from-zinc-700 via-stone-900 to-zinc-900 text-white px-4 sm:px-6 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/">
              <img
                src="https://image-static.collegedunia.com/public/images/cd_logo_white_new.png"
                alt="cd_logo"
                className="h-5 sm:h-6"
              />
            </a>
            <div className="hidden sm:flex flex-col text-xs">
              <div className="flex items-center  hover:text-red-400">
                <IoSchool />
                <span className="mr-1">Select Goal &</span>
                <FaMapMarkerAlt />
                <span>City</span>
              </div>
              <div className="flex items-center mt-1">
                <a
                  href="/" 
                  className="text-sm hover:text-yellow-400 flex items-center"
                >
                  Engineering <FaChevronDown size={12} className="ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex flex-1 justify-center items-center space-x-4">
            <div className="relative w-[70%] sm:w-[60%] md:w-[70%]">
              <input
                type="text"
                placeholder="Search for Colleges, Exams, Courses and More..."
                className="w-full px-4 py-2 border rounded-md text-black focus:outline-none text-sm sm:text-base"
              />
            </div>

            <div className="hidden lg:flex items-center space-x-2 text-white">
              <div className="flex items-center space-x-2 px-2 py-2 rounded-md cursor-pointer">
                <FaPen />
                <div className="flex flex-col text-sm">
                  <span>Write a Review</span>
                  <span className="text-xs text-white bg-orange-700 px-1 rounded-md text-center">
                    Get Upto ₹500*
                  </span>
                </div>
              </div>
              <div className="border-l border-gray-400 h-6 mx-2"></div>
              <button className="flex items-center space-x-2 text-sm font-semibold">
                <PiDotsNineBold className="size-6" />
                <span>Explore</span>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white bg-black p-2 rounded-full  border-2 border-white ">
              <FaBell size={17} />
            </button>

            <div className="hidden sm:flex items-center space-x-2  cursor-pointer border p-2 rounded-full">
              <IoMdMenu size={18} />

              <FaUserCircle
                size={24}
                className="text-white border-2 border-orange-600 rounded-full"
              />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden text-white"
            >
              {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
          </div>
        </div>
        {/* for mobile okk */}
      </header>
    </>
  );
};

export default Header;
