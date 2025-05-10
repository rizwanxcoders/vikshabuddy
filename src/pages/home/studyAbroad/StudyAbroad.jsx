import Section from "../../../components/Section";
import SliderSection from "../../../components/SliderSection";
import StudyAbroadCard from "./StudyAbroadCard";

const StudyAbroad = () => {
  const responsive = [
    {
      breakpoint: 2080,
      settings: { slidesToShow: 3, slidesToScroll: 3 },
    },
    {
      breakpoint: 1280, // Laptops
      settings: { slidesToShow: 3, slidesToScroll: 3 },
    },
    {
      breakpoint: 1024, // Tablets
      settings: { slidesToShow: 2, slidesToScroll: 2 },
    },
    {
      breakpoint: 768, // Mobile
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
    {
      breakpoint: 480, // Small screens
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ];

  return (
    <Section className={`bg-white`} title="Top Exams">
      <SliderSection
        dataUrl="/topPlaces.json"
        CardComponent={StudyAbroadCard}
        responsive={responsive}
      />
    </Section>
  );
};

export default StudyAbroad;
