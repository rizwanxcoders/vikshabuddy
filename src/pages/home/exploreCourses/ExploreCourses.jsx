import CourseCard from "./CourseCard";
import SliderSection from "../../../components/SliderSection";
import Section from "../../../components/Section";

const ExploreCourses = () => {
  const categories = ["Bachelors", "Masters", "Diploma", "Certification"];

  const responsive = [
    {
      breakpoint: 2080,
      settings: { slidesToShow: 4, slidesToScroll: 4 },
    },
    {
      breakpoint: 1280, // Laptops
      settings: { slidesToShow: 4, slidesToScroll: 4 },
    },
    {
      breakpoint: 1024, // Tablets
      settings: { slidesToShow: 3, slidesToScroll: 3 },
    },
    {
      breakpoint: 768, // Mobile
      settings: { slidesToShow: 2, slidesToScroll: 2 },
    },
    {
      breakpoint: 480, // Small screens
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ];

  return (
    <Section className={`bg-white`} title={"Explore Courses"}>
      <SliderSection
        dataUrl="/topPlaces.json"
        CardComponent={CourseCard}
        responsive={responsive}
        categories={categories}
      />
    </Section>
  );
};

export default ExploreCourses;
