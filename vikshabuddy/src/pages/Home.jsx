// src/pages/Home.jsx
import React from 'react';
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Hero from "./header/Hero";
import StudyGoal from "./header/StudyGoal";
import ExploreProgram from "./header/ExploreProgram";

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
