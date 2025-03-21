import { useEffect, useState } from "react";
import PillButton from "../../../components/PillButton";
import Section from "../../../components/Section";

const TopCourses = () => {
  const [topCourses, setTopCourses] = useState([]);

  useEffect(() => {
    fetch("/topCourse.json") // Ensure this file is inside the public folder
      .then((res) => res.json())
      .then((data) => setTopCourses(data))
      .catch((error) => console.error("Error fetching places:", error));
  }, []);

  return (
    <Section className={`bg-gray-100`} title={"Top Courses"}>
      <div>
            <div className=" flex items-center flex-wrap">
              {topCourses.map((data, index) => (
                <PillButton text={data.title} href={data.url} key={index} />
              ))}
            </div>
          </div>
    </Section>
    
    
  );
};

export default TopCourses;
