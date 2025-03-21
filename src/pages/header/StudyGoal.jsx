import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Engineerlogo,
  Management,
  Ecommerce,
  Arts,
  Medical,
  Design,
} from "../../../src/assets/Svg";

const StudyGoal = () => {
  const [startIndex, setStartIndex] = useState(0);

  const goals = [
    {
      title: "Engineering",
      icon: <Engineerlogo />,
      colleges: "3895 Colleges",
      courses1: ["B.Tech", "B.E"],
      courses2: ["M.Tech"],
    },
    {
      title: "Management",
      icon: <Management />,
      colleges: "7889 Colleges",
      courses1: ["BBA"],
      courses2: ["MBA", "PGDM"],
    },
    {
      title: "Commerce",
      icon: <Ecommerce />,
      colleges: "4994 Colleges",
      courses1: ["B.Com"],
      courses2: ["M.Com"],
    },
    {
      title: "Arts",
      icon: <Arts />,
      colleges: "5633 Colleges",
      courses1: ["BA"],
      courses2: ["MA"],
    },
    {
      title: "Medical",
      icon: <Medical />,
      colleges: "2520 Colleges",
      courses1: ["BDS", "B.Sc Nursing"],
      courses2: ["MBBS"],
    },
    {
      title: "Design",
      icon: <Design />,
      colleges: "6567 Colleges",
      courses1: ["Fashion Design"],
      courses2: ["Graphic Design"],
    },
    { title: "See All" },
  ];

  const visibleCards = 4;
  const totalCards = goals.length;

  const handleNext = () => {
    if (startIndex + visibleCards < totalCards) setStartIndex(startIndex + 2);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 2);
  };

  return (
    <div className="flex justify-center">
      <div className="w-5/6 mt-5">
        {/* Title */}
        <h1 className="text-[24px] sm:text-[30px] md:text-[35px] font-semibold text-gray-800 text-center sm:text-left mb-6">
          Select Your Study Goal
        </h1>

        {/* Cards Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow (Hidden on Small Screens) */}
          {startIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-2 z-10 p-2 bg-gray-400 text-white rounded-full shadow-md hidden sm:flex"
            >
              <FaChevronLeft size={20} />
            </button>
          )}

          {/* Cards okkk*/}
          <div className="w-full max-w-[1100px] overflow-hidden">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-nowrap gap-4 transition-transform duration-300"
              style={{ transform: `translateX(-${startIndex * 26}%)` }}
            >
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="min-w-full sm:min-w-[48%] md:min-w-[30%] lg:min-w-[23%] mx-auto sm:mx-2 p-2 bg-white rounded-md text-center sm:text-left h-[240px] border-2 flex flex-col justify-center items-center"
                >
                  {goal.title === "See All" ? (
                    <div className="text-lg font-bold text-orange-700 flex items-center gap-2 cursor-pointer">
                      {goal.title} <span className="text-xl">→</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full border p-2 flex items-center justify-center">
                          {goal.icon}
                        </div>
                        <div className="text-lg font-bold">
                          {goal.title}
                          <div className="text-sm text-gray-600  hover:text-red-700 mt-1">
                            {goal.colleges}
                          </div>
                        </div>
                      </div>

                      <hr className="mt-3 w-full border-gray-300" />

                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="mt-2 text-sm text-gray-700  hover:text-red-700 ">
                          {goal.courses1 && goal.courses1.join(", ")}
                        </div>
                        <hr className="mt-3 w-full border-gray-300" />
                        <div className="mt-2 text-sm text-gray-700  hover:text-red-700 ">
                          {goal.courses2 && goal.courses2.join(", ")}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow (Hidden on Small Screens) */}
          {startIndex + visibleCards < totalCards && (
            <button
              onClick={handleNext}
              className="absolute right-2 z-10 p-2 bg-gray-800 text-white rounded-full shadow-md hidden sm:flex"
            >
              <FaChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyGoal;
