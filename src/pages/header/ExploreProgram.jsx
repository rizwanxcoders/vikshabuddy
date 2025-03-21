import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Colleges1,
  Colleges2,
  Colleges3,
  Colleges4,
  Colleges5,
  Colleges6,
} from "../../../src/assets/Svg2";

const categories = [
  "All",
  "BE/B.Tech",
  "MBA/PGDM",
  "MBBS",
  "ME/M.Tech",
  "B.Sc",
  "BA",
  "B.Com",
  "BCA",
  "BBA/BMS",
  "B.Sc (Nursing)",
];

const cards1 = [
  {
    title: "Ranking",
    description: "College ranked based on real data",
    tags: [
      "Indiatoday - 1705",
      "Collegedunia - 1369",
      "IIRF - 1515",
      "Outlook - 1286",
    ],
    link: "Top Ranked Colleges in India",
    icon: <Colleges1 />,
  },
];
const cards2 = [
  {
    title: "Find Colleges",
    description: "Discover 19000+ colleges via preferences",
    tags: ["Best MBA colleges in India", "Best BTech colleges in India"],
    link: "Discover Top Colleges in India",
    icon: <Colleges2 />,
  },
];
const cards3 = [
  {
    title: "Compare Colleges",
    description: "Compare on the basis of rank, fees, etc.",
    comparisons: [
      { college1: "IIT Madras", college2: "IIT Delhi", course: "BE/B.Tech" },
      { college1: "IIT Madras", college2: "IIT Bombay", course: "BE/B.Tech" },
    ],
    link: "Compare Colleges",
    icon: <Colleges3 />,
  },
];
const cards4 = [
  {
    title: "Exams",
    description: "Know more about your exams",
    tags: [
      "B.Com",
      "B.Sc",
      "B.Sc (Nursing)",
      "BA",
      "BBA/BMS",
      "BCA",
      "BE/B.Tech",
    ],
    link: "Check All Entrance Exams in India",
    icon: <Colleges4 />,
  },
];
const cards5 = [
  {
    title: "College Predictor",
    description: "Know your college admission chances",
    tags: [
      "NEET",
      "JEE Advanced",
      "JEE Main",
      "CAT",
      "NMAT",
      "MAT",
      "GATE",
      "XAT",
    ],
    link: "Find Where you may get Admission",
    icon: <Colleges5 />,
  },
];
const cards6 = [
  {
    title: "Course Finder",
    description: "Discover top courses in Indian Colleges 2025",
    tags: [
      "BE/B.Tech - 1170",
      "MBA/PGDM - 1142",
      "ME/M.Tech - 1221",
      "B.Sc - 1029",
    ],
    link: "Get Top Courses in Indian Colleges",
    icon: <Colleges6 />,
  },
];

const ExploreProgram = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCategories = 5;
  const totalCategories = categories.length;

  const handleNext = () => {
    if (startIndex + visibleCategories < totalCategories)
      setStartIndex(startIndex + 2);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 2);
  };

  return (
    <div className="flex justify-center">
      <div className="w-5/6 mt-5">
        <h1 className="text-[24px] sm:text-[30px] md:text-[35px] font-semibold text-gray-800 text-center sm:text-left mb-6">
          Explore Programs
        </h1>

        <div className="relative flex items-center justify-center">
          {startIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-2 z-10 p-2 bg-gray-400 text-white rounded-full shadow-md hidden sm:flex"
            >
              <FaChevronLeft size={20} />
            </button>
          )}

          <div className="w-full max-w-[1100px] overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${startIndex * 20}%)` }}
            >
              {categories.map((category, index) => (
                <div key={index} className="px-2 min-w-[20%]">
                  <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 w-full">
                    {category}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {startIndex + visibleCategories < totalCategories && (
            <button
              onClick={handleNext}
              className="absolute right-2 z-10 p-2 bg-gray-800 text-white rounded-full shadow-md hidden sm:flex"
            >
              <FaChevronRight size={20} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 w-full">
          {cards1.map((card, index) => (
            <div key={index} className="border-2 rounded-lg">
              {/* Header Section */}
              <div className="bg-blue-50 p-2 flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p className="text-gray-600 p-2">{card.description}</p>
                </div>
                <div className="-mb-9">{card.icon}</div>
              </div>

              <div className="flex flex-wrap gap-2 my-2 p-2">
                {card.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-white border-2 border-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a href="/" className="p-3 text-black">
                {card.link} →
              </a>
            </div>
          ))}

          {cards2.map((card, index) => (
            <div key={index} className="border-2 rounded-lg">
              <div className="bg-blue-50 p-2 flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p className="text-gray-600 text-md w-fit py-2">
                    {card.description}
                  </p>
                </div>
                <div className="-mb-9">{card.icon}</div>
              </div>

              <div className="flex flex-wrap gap-2 my-2 p-2">
                {card.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-white border-2 border-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a href="/" className="p-3 text-black">
                {card.link} →
              </a>
            </div>
          ))}

          {cards3.map((card, index) => (
            <div key={index} className="border-2 rounded-lg">
              <div className="bg-blue-50 p-2 flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p className="text-gray-600 p-2">{card.description}</p>
                </div>
                <div className="-mb-9">{card.icon}</div>
              </div>

              <div className="flex flex-wrap gap-2 my-2 p-2">
                {card.comparisons.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1 text-sm bg-white border-2 border-gray-100 text-gray-700 rounded-full flex items-center space-x-2"
                  >
                    <span className="font-medium">{item.college1}</span>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-700">
                      vs
                    </span>
                    <span className="font-medium">{item.college2}</span>
                    <span className="text-xs text-blue-600">{item.course}</span>
                  </div>
                ))}
              </div>

              <a href="/" className="p-3 text-black">
                {card.link} →
              </a>
            </div>
          ))}

          {cards4.map((card, index) => (
            <div key={index} className="border-2 rounded-lg">
              {/* Header Section */}
              <div className="bg-blue-50 p-2 flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p className="text-gray-600 p-2">{card.description}</p>
                </div>
                <div className="-mb-9">{card.icon}</div>
              </div>

              <div className="flex flex-wrap gap-2 my-2 p-2">
                {card.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-white border-2 border-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer Link */}
              <a href="/" className="p-3 text-black">
                {card.link} →
              </a>
            </div>
          ))}

          {cards5.map((card, index) => (
            <div key={index} className="border-2 rounded-lg">
              {/* Header Section */}
              <div className="bg-blue-50 p-2 flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p className="text-gray-600 p-2">{card.description}</p>
                </div>
                <div className="-mb-9">{card.icon}</div>
              </div>

              <div className="flex flex-wrap gap-2 my-2 p-2">
                {card.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-white border-2 border-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <a href="/" className="p-3 text-black">
                {card.link} →
              </a>
            </div>
          ))}
          {cards6.map((card, index) => (
            <div key={index} className="border-2 rounded-lg">
              {/* Header */}
              <div className="bg-blue-50 p-2 flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p className="text-gray-600 p-2">{card.description}</p>
                </div>
                <div className="-mb-9">{card.icon}</div>
              </div>

              <div className="flex flex-wrap gap-2 my-2 p-2">
                {card.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-white border-2 border-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer Link */}
              <a href="/" className="p-3 text-black">
                {card.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProgram;
