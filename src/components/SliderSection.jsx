import { useEffect, useState } from "react";
import SliderComp from "./SliderComp"

const SliderSection = ({
  dataUrl,
  // eslint-disable-next-line no-unused-vars
  CardComponent,
  responsive,
  categories = [],
}) => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error("Error fetching data:", error));
  }, [dataUrl]);

  // Filter data based on selected category (if applicable)
  const filteredData = selectedCategory
    ? data.filter((item) => item.category === selectedCategory)
    : data;

  return (
    <div>
      {/* Category Filters (If Categories Exist) */}
      {categories.length > 0 && (
        <div className="flex items-center overflow-x-auto space-x-3 mb-4">
          <button
            onClick={() => setSelectedCategory("")}
            className={`h-10 rounded-full border px-4 font-medium transition-all ${
              selectedCategory === ""
                ? "bg-gray-200 text-black"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`h-10 rounded-full border px-4 font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gray-200 text-black"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Slider */}
      <SliderComp responsive={responsive}>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">
            No courses available...
          </p>
        )}
      </SliderComp>
    </div>
  );
};

export default SliderSection;
