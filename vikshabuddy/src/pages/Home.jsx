// src/pages/Home.jsx
import React from 'react';
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
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page for your application.</p>
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