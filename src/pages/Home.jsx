// src/pages/Home.jsx
import React from 'react';
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Hero from "./header/Hero";
import StudyGoal from "./header/StudyGoal";
import ExploreProgram from "./header/ExploreProgram";

import TopColleges from "./home/Middle-section/TopColleges";
import TopUniversities from "./home/Middle-section/TopUniversities";
import TopUniversities02 from "./home/Middle-section/TopUniversities02";
import CollegeRanking from "./home/Middle-section/CollegeRanking";
import RankingTable from "./home/Middle-section/RankingTable";
import StartNowAdd from "./home/Middle-section/StartNowAdd";
import SubscribeNowAdd from "./home/Middle-section/SubscribeNowAdd";

import Footer from './home/footerFolder/Footer';
import NewsSubscription from './home/NewsletterSubscriptionFolder/NewsSubscription';
import TopCourses from './home/commonComponents/TopCourses';
import StudyAbroad from './home/studyAbroad/StudyAbroad';
import LatestNews from './home/LatestNewsFolder/LatestNews';
import Admissions from './home/commonComponents/Admissions';
import TopExams from './home/topExamFolder/TopExams';
import CBSE10 from './home/commonComponents/CBSE10';
import CBSE12 from './home/commonComponents/CBSE12';
import ExploreCourses from './home/exploreCourses/ExploreCourses';
import TopPlaces from './home/topPlaces/TopPlaces';

const Home = () => {
  return (
    <div className="home-container">
            <Header />
      <Navbar />
      <Hero />
      <hr className="mt-10 border-gray-300" />
      <StudyGoal />
      <hr className="mt-10 border-gray-300" />

      <ExploreProgram />
      <div className=" scale-[0.8] origin-top-left w-[125%] ">
        <hr className=" border-gray-300 mt-10" />
        <TopColleges />
        <hr className=" border-gray-300 mt-10" />
        <TopUniversities />
        <TopUniversities02 />
        <hr className=" border-gray-300 mt-10" />
        <StartNowAdd />
        <hr className=" border-gray-300 mt-10" />
        <CollegeRanking />
        <RankingTable />
        <hr className=" border-gray-300 mt-10" />
        <SubscribeNowAdd />
        <hr className=" border-gray-300 mt-10" />
      </div>
      <TopPlaces />
      <ExploreCourses />
      <CBSE12 />
      <CBSE10 />
      <TopExams />
      <Admissions />
      <LatestNews />
      <StudyAbroad />
      <TopCourses />
      <NewsSubscription />
      <Footer />
    </div>
  );
};

export default Home;
