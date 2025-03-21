import { useEffect, useState } from "react";
import PillButton from "../../../components/PillButton";
import Section from "../../../components/Section";

const Admissions = () => {
  const [topAdmissions, setTopAdmissions] = useState([]);

  useEffect(() => {
    fetch("/topAdmissions.json") // Ensure this file is inside the public folder
      .then((res) => res.json())
      .then((data) => setTopAdmissions(data))
      .catch((error) => console.error("Error fetching places:", error));
  }, []);

  return (
    <Section className={`bg-gray-100`} title={`Admissions 2025`}>
      <div>
        <div className=" flex items-center flex-wrap">
          {topAdmissions.map((data, index) => (
            <PillButton text={data.title} href={data.url} key={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Admissions;
