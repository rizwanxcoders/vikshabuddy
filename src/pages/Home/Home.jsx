import TopColleges from './Middle-section/TopColleges'
import TopUniversities from './Middle-section/TopUniversities'
import TopUniversities02 from './Middle-section/TopUniversities02'
import StartNowAdd from './Middle-section/StartNowAdd'
import CollegeRanking from './Middle-section/CollegeRanking'
import RankingTable from './Middle-section/RankingTable'
import SubscribeNowAdd from './Middle-section/SubscribeNowAdd'
import Footer from "./footerFolder/Footer";
import CBSE12 from "./commonComponents/CBSE12";
import CBSE10 from "./commonComponents/CBSE10";
import TopCourses from "./commonComponents/TopCourses";
import ExploreCourses from "./exploreCourses/ExploreCourses";
import LatestNews from "./LatestNewsFolder/LatestNews";
import NewsSubscription from "./NewsletterSubscriptionFolder/NewsSubscription";
import StudyAbroad from "./studyAbroad/StudyAbroad";
import TopExams from "./topExamFolder/TopExams";
import TopPlaces from "./topPlaces/TopPlaces";
import Admissions from "./commonComponents/Admissions";

const Home = () => {
  return (
    <div className="relative bg-white mx-auto">
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


// src/pages/Home.jsx
// import React from 'react';


// const Home = () => {
//   return (
//     <div className="home-container">
      
//     </div>
//   );
// };

// export default Home;