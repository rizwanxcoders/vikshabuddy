import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Hero from "./header/Hero";
import StudyGoal from "./header/StudyGoal";
import ExploreProgram from "./header/ExploreProgram";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <hr className="mt-10 border-gray-300" />
      <StudyGoal />
      <hr className="mt-10 border-gray-300" />

      <ExploreProgram />
    </>
  );
};

export default Home;
