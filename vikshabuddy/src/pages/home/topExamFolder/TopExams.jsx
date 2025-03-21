import Section from "../../../components/Section";
import SliderSection from "../../../components/SliderSection";
import ExamDetailsCard from "./ExamDetailsCard";

const responsive = [
  { breakpoint: 2080, settings: { slidesToShow: 5, slidesToScroll: 5 } },
  { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4 } },
  { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
  { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
  { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
];

const TopExams = () => {
  return (
    <Section className={`bg-white`} title="Top Exams">
      <SliderSection
        dataUrl="/topPlaces.json"
        CardComponent={ExamDetailsCard}
        responsive={responsive}
      />
    </Section>
  );
};

export default TopExams;
