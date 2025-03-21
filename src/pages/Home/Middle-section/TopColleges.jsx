import React, { useEffect, useRef, useState } from "react";
import courses from "./Data/courseData";
import colleges from "./Data/collegeData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


const TopColleges = () => {

  const sliderRef = useRef(null); // Reference to Slider
  const [isStart, setIsStart] = useState(true); // Tracks if slider is at start
  const [isEnd, setIsEnd] = useState(false); // Tracks if slider is at end
  const [clickedButton, setClickedButton] = useState(null); //Track which course button is clicked

  // Function to check slider position
  const checkPosition = () => {
    if (sliderRef.current) {
      const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
      const totalSlides = courses.length - 8; // Total slides minus visible slides

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
    slidesToShow: 8,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: checkPosition, // Track position after slide change
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
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

  const handleCourseButton = () =>{

  }


  return (

    <div className=" flex items-center justify-center flex-col">
      <div className="w-5/6 mt-14 relative">
        <h1 className="text-4xl font-bold mb-10">Top 10 Colleges</h1>
 
        {
          clickedButton ??
          <p>Yaha par tumhara code ayega</p> 
        }
        
        <div className="w-full">
          <Slider ref={sliderRef} {...settings}>
            {courses.map((course, index) => (
              <div key={`${course}-${index}`} className="p-2">
                <button onClick={() => setClickedButton(index)}
                className={`w-full px-5 py-2 text-lg border-2 rounded-3xl border-gray-200 
                  ${clickedButton === index ? "bg-gray-200 text-black border-2 border-slate-600" : "bg-white text-gray-500"}`}
                >
                  {
                    clickedButton === index ? (<div className="flex flex-row items-center justify-between">{course} <RxCross2 size={24} className=""/></div>) : (course)
                  }
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>

{/* -----------------------------COLLEGES-------------------------------------- */}

      <div className="w-5/6 mt-12 border-2 border-gray-200 ">
        <table className="min-w-full ">
          <thead className=" border-b-2 border-gray-200">
          <tr className=" ">
            <th className="text-start pl-4 py-5 text-2xl font-semibold ">Rank</th>
            <th className="text-start pl-6 text-2xl font-semibold ">College</th>
            <th className="text-start pl-4 text-2xl font-semibold ">Ranking</th>
            <th className="text-start pl-4 text-2xl font-semibold ">Cutoff</th>
            <th className="text-start pl-4 text-2xl font-semibold ">Application Deadline</th>
            <th className="text-start pl-4 text-2xl font-semibold ">Fees</th>
          </tr>
          </thead>
          <tbody>
          {colleges.map((college, index) => (
            <tr key={college.rank} className={index % 2 === 0 ? " border-b-2 border-gray-200 bg-white" : " border-b-2 border-gray-200 bg-gray-100"}>
              <td className=" text-center text-2xl text-gray-500 ">#{college.rank}</td>
              <td className=" p-4 text-xl flex flex-row ">
              <img src={college.clg_img} className=" mx-2 p-1 size-12 border-2 border-gray-200 rounded-full" />
                <span>
                <strong>{college.name}</strong>
                <div className="text-xl text-gray-600">{college.location} | ⭐ {college.rating}/5</div>
                </span>
              </td>
              <td className=" p-4 text-xl">
              <span className=" flex flex-row">
              <img src={college.rnk_img} className=" px-1 py-4 mx-2 size-12" />
              <p>{college.ranking}</p>
              </span>
                </td>
              <td className="p-4 text-xl">
                {college.cutoff.exam} Cut off {college.cutoff.score}
              </td>
              <td className="p-4 text-xl ">{college.applicationDeadline}</td>
              <td className=" p-4 text-xl">
                {college.fees}
                <div className="text-md text-gray-500">{college.feeType}</div>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <hr className=' border-gray-300 mt-10' />
    </div>
  );
};

export default TopColleges;
