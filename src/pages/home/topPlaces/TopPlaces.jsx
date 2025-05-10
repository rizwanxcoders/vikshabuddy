import Section from "../../../components/Section";
import SliderSection from "../../../components/SliderSection";
import TopPlacesCard from "./TopPlacesCard";

const TopPlaces = () => {
  const responsive = [
    {
      breakpoint: 2080,
      settings: { slidesToShow: 6, slidesToScroll: 6 },
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
    <Section className={`bg-white`} title={"Top Study Places"}>
      <SliderSection
        dataUrl="/topPlaces.json"
        CardComponent={TopPlacesCard}
        responsive={responsive}
      />
    </Section>
  );
};

export default TopPlaces;
