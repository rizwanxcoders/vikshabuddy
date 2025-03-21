import { useEffect, useState } from "react";
import PillButton from "../../../components/PillButton";
import Section from "../../../components/Section";

const CBSE10 = () => {
  const [cbse10Data, setCbse10Data] = useState([]);

  useEffect(() => {
    fetch("/cbse10Data.json") // Ensure this file is inside the public folder
      .then((res) => res.json())
      .then((data) => setCbse10Data(data))
      .catch((error) => console.error("Error fetching places:", error));
  }, []);

  return (
    <Section className='bg-gray-100' title={"CBSE Class X Board Exam"}>
      <div>
        <div className=" flex items-center flex-wrap">
          {cbse10Data.map((data, index) => (
            <PillButton text={data.text} href={data.href} key={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CBSE10;
