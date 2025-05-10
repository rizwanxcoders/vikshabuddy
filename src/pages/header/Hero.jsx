import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

import { ReactTyped } from "react-typed";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import college1 from "../../../src/assets/college1.avif";
import college2 from "../../../src/assets/college2.avif";
import college3 from "../../../src/assets/college3.avif";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slightly slower transition between slides
    fade: true,
    dotsClass: "slick-dots !bottom-5",
    customPaging: () => (
      <div className="w-3 h-3 bg-white hover:bg-white transition-all duration-300" />
    ),
  };

  const images = [college1, college2, college3];

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 600,
    });
  }, []);
  const [dynamicStrings] = useState([
    "250+ Colleges",
    "100+ Universities",
    "5000+ Courses",
  ]);
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <section
              id="hero"
              data-aos="fade-right"
              className="w-[100%] overflow-hidden lg:overflow-hidden h-[350px] m-auto bg-cover bg-center flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20 relative"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black/30 " />
              <div className="relative z-10 text-center w-full">
                <div className="lg:w-[100%]   text-white text-xl">
                  <h1 className="text-center text-white text-3xl font-semibold overflow-hidden">
                    Find Over{" "}
                    <ReactTyped
                      showCursor={false}
                      strings={dynamicStrings}
                      typeSpeed={100}
                      backSpeed={20}
                      loop
                    />{" "}
                    in India
                  </h1>
                </div>

                {/* Search Input */}
                <div className="mt-2 flex justify-center w-full">
                  <input
                    type="text"
                    placeholder="Search for colleges, exams, courses and more.."
                    className="p-2 w-[70%] rounded-l-md border border-gray-300"
                  />
                  <button className="p-2 bg-orange-700 text-white rounded-r-md hover:bg-red-700 transition duration-300">
                    <h1>Search</h1>
                  </button>
                </div>

                <div className="mt-4 ml-[70%] flex justify-center">
                  <button className="p-1 px-4 bg-orange-700 text-white rounded-md hover:bg-red-700 transition duration-300">
                    Need Counseling
                  </button>
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
