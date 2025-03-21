import React, { useEffect, useRef, useState } from "react";
import cardsData from "./Data/cardsData";
import {
  FaAngleRight,
  FaArrowLeftLong,
  FaArrowRightLong,
} from "react-icons/fa6";
import Slider from "react-slick";

const TopUniversities02 = () => { 

const sliderRef = useRef(null); // Reference to Slider
  const [isStart, setIsStart] = useState(true); // Tracks if slider is at start
  const [isEnd, setIsEnd] = useState(false); // Tracks if slider is at end

  // Function to check slider position
  const checkPosition = () => {
    if (sliderRef.current) {
      const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
      const totalSlides = cardsData.length - 3.5; // Total slides minus visible slides

      setIsStart(currentSlide === 0);
      setIsEnd(currentSlide >= totalSlides);
    }
  };

  const PrevArrow = ({ onClick }) =>
    !isStart && (
      <button
        // className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-6 rounded-full drop-shadow-2xl shadow-gray-600 hover:bg-gray-50 transition"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-6 rounded-full drop-shadow-xl shadow-gray-800 hover:bg-gray-50 transition"
        onClick={() => {
          onClick();
          setTimeout(checkPosition, 200); // Delay check for smooth transition
        }}
      >
        <FaArrowLeftLong size={24} />
      </button>
    );

  // Custom Next Button
  const NextArrow = ({ onClick }) =>
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
    );

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3.2, // Number of visible cards
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: checkPosition, // Track position after slide change
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Initial position check when component mounts
  useEffect(() => {
    checkPosition();
  }, []);
    
      return (
        <div className="flex items-center justify-center flex-col mb-10">
    
          <div className="w-5/6 h-fit relative">
            <Slider ref={sliderRef} {...settings}>
              {cardsData.map((i, index) => (
                <div key={index} className="px-2">
                  <div className="w-full h-fit bg-white rounded-lg overflow-hidden border-2 border-gray-300">
                    <div
                      className="w-full h-48 bg-cover bg-center bg-gray-500 bg-blend-multiply text-white p-3 flex flex-col items-center"
                      style={{ backgroundImage: `url(${i.clg_img})` }}
                    >
                      <div className="w-full flex justify-end ">
                        <div className=" w-25 h-6 bg-gray-900 text-white text-md font-semibold rounded-2xl flex items-center justify-start">
                          <div className=" size-8 bg-sky-700 text-white text-xl text-center rounded-full z-10">
                            cd
                          </div>
                          <p className="pl-3 text-center">{i.score}</p>
                        </div>
                      </div>
    
                      <div className="w-full h-full flex items-end">
                        <div className=" flex flex-row ">
                          <img
                            src={i.clg_icon}
                            className=" mx-2 p-1 size-12 border-2 bg-white border-gray-200 rounded-full"
                          />
    
                          <span>
                            <h3 className="text-2xl font-bold ">{i.college}</h3>
                            <span className=" flex flex-row">
                              <p className="text-gray-100 text-lg">{i.location}</p>
                              <p className="text-gray-100 text-lg">
                                {i.affiliations.join(", ")}
                              </p>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
    
                    <div className="px-4 ">
                      <div className=" flex flex-row justify-between">
                        <h4 className=" text-gray-800 text-2xl font-semibold mt-2">{i.program}</h4>
                        <div className="flex items-center mt-2">
                          {/* <span className="text-yellow-500 text-2xl outline-none">
                             {i.rating}
                          </span> */}
                          <span className=" flex flex-row">
                          <p className="text-yellow-500 text-xl border-0 ring-0 shadow-none outline-none">⭐</p>
                           <p className=" font-bold text-xl"> {i.rating}/5</p>
                        </span>
                          
                        </div>
                      </div>
    
                      <div className=" flex flex-row justify-between mb-8">
                        <span className=" flex flex-row">
                          <p className="text-blue-500 text-lg font-semibold">{i.first_year_fees}</p>
                           <p className="text-lg text-gray-600 font-semibold ">&nbsp;First Year Fees</p>
                        </span>
                        <p className="text-gray-600 text-center pt-1 text-lg font-semibold ">
                            {i.reviews} reviews
                          </p>
                        
                      </div>
    
                      <div className="mt-3">
                        <hr className=" w-full px-2 border-gray-300 mt-2" />
                        
                        <p className="w-full text-xl text-gray-600 py-2">
                          Ranked {i.qs_ranking} out of 1400 QS
                        </p>
    
                        <hr className=" w-full px-2 border-gray-300 mt-2" />
    
                        <div className=" flex flex-row justify-between">
                          <p className="w-full text-xl text-gray-800 font-bold py-2">
                            View All Courses and Fees
                          </p>
                          <button className=" text-center text-gray-500">
                            <FaAngleRight size={20} />
                          </button>
                        </div>
    
                        <hr className=" w-full px-2 border-gray-300 mt-2" />
    
                        <div className=" flex flex-row justify-between">
                          <p className="w-full text-xl text-gray-800 font-bold py-2">
                            Download Brochure
                          </p>
                          <button className=" text-center text-gray-500">
                            <FaAngleRight size={20} />
                          </button>
                        </div>
    
                        <hr className=" w-full px-2 border-gray-300 mt-2" />
    
                        <div className=" mb-2 flex flex-row justify-between">
                          <p className="w-full text-xl text-gray-800 font-bold py-2">
                            Compare
                          </p>
                          <button className=" text-center text-gray-500">
                            <FaAngleRight size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      );
}

export default TopUniversities02
