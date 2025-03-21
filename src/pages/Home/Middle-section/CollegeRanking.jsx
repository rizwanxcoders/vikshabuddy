import React, { useEffect, useRef, useState } from "react";
import courses from "./Data/courseData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// const PrevArrow = ({ onClick }) => (
//   <button
//     className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-6 rounded-full drop-shadow-xl hover:bg-gray-50 transition"
//     onClick={onClick}
//   >
//     <FaArrowLeftLong size={24} />
//   </button>
// );
 
// // Custom Next Button
// const NextArrow = ({ onClick }) => (
//   <button
//     className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-6 rounded-full drop-shadow-xl hover:bg-gray-50 transition"
//     onClick={onClick}
//   >
//     <FaArrowRightLong size={24} />
//   </button>
// );

const CollegeRanking = () => {

  const [selectedYear, setSelectedYear] = useState("2024");
  const years = ["2021", "2022", "2023", "2024"];

  const sliderRef = useRef(null); // Reference to Slider
  const [isStart, setIsStart] = useState(true); // Tracks if slider is at start
  const [isEnd, setIsEnd] = useState(false); // Tracks if slider is at end

  // Function to check slider position
  const checkPosition = () => {
    if (sliderRef.current) {
      const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
      const totalSlides = courses.length - 5.5; // Total slides minus visible slides

      setIsStart(currentSlide === 0);
      setIsEnd(currentSlide >= totalSlides);
    }
  };

  // Custom Previous Button
  const PrevArrow = ({ onClick }) => ( 
    !isStart && (
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-6 rounded-full drop-shadow-xl shadow-gray-800 hover:bg-gray-50 transition"
        onClick={() => {
          onClick();
          setTimeout(checkPosition, 200); // Delay check for smooth transition
        }}
      >
        <FaArrowLeftLong size={24} />
      </button>
    )
  );

  // Custom Next Button
  const NextArrow = ({ onClick }) => (
    !isEnd && (
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-6 rounded-full drop-shadow-xl shadow-gray-800 hover:bg-gray-50 transition"
        onClick={() => {
          onClick();
          setTimeout(checkPosition, 200); // Delay check for smooth transition
        }}
      >
        <FaArrowRightLong size={24} />
      </button>
    )
  );

  // Slider settings
  const settings = {
    dots: false,
    infinite: false, // Set to false for proper start & end detection
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: checkPosition, // Track position after slide change
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  // Initial position check when component mounts
  useEffect(() => {
    checkPosition();
  }, []);

  return (
    <div className=" flex items-center justify-center flex-col mb-10">
      <div className=" w-5/6">
        <div className="w-full mt-14 flex flex-row justify-between">
          <h1 className="text-4xl font-bold mb-10">College Ranking 2025</h1>
          <a href="" className=" text-xl font-semibold text-amber-600 hover:text-amber-800">
            View all Colleges
          </a>
        </div>

        <div className="w-full relative flex flex-row">
          <div className="w-1/3 flex flex-row">
            <div className="relative inline-block">
              <label className="flex items-center border border-gray-300 rounded-full px-10 py-2 bg-white shadow-sm">
                <span className="text-gray-600 text-2xl mr-2">Ranking:</span>
                <select
                  className="bg-transparent focus:outline-none cursor-pointer"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  {years.map((year) => (
                    <option key={year} value={year} className="px-5">
                      {year}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div class="w-0.5 h-12 mx-10 bg-gray-400"></div>

            <div>
              <h3 className="text-2xl ml-2 pt-2 ">Agencies:</h3>
            </div>
          </div>

          <div className="w-2/3">
            <Slider ref={sliderRef} {...settings}>
              {courses.map((course, index) => (
                <div key={`${course}-${index}`} className="">
                  <button className="w-full px-5 py-2 text-lg border-2 rounded-3xl border-gray-200 text-gray-500 hover:bg-gray-100">
                    {course}
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeRanking;
