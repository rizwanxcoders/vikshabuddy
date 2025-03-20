// src/pages/Home.jsx
import React from 'react';
import TopColleges from './Middle-section/TopColleges'
import TopUniversities from './Middle-section/TopUniversities'
import TopUniversities02 from './Middle-section/TopUniversities02'
import StartNowAdd from './Middle-section/StartNowAdd'
import CollegeRanking from './Middle-section/CollegeRanking'
import RankingTable from './Middle-section/RankingTable'
import SubscribeNowAdd from './Middle-section/SubscribeNowAdd'

const Home = () => {
  return (
    <div className="home-container">
      <div className=" scale-[0.8] origin-top-left w-[125%] ">
      <hr className=" border-gray-300 mt-10" />
      <TopColleges/>
      <hr className=" border-gray-300 mt-10" />
      <TopUniversities/>
      <TopUniversities02/>
      <hr className=" border-gray-300 mt-10" />
      <StartNowAdd/>
      <hr className=" border-gray-300 mt-10" />
      <CollegeRanking/>
      <RankingTable/>
      <hr className=" border-gray-300 mt-10" />
      <SubscribeNowAdd/>
      <hr className=" border-gray-300 mt-10" />
      </div>
    </div>
  );
};

export default Home;