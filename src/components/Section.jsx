const Section = ({ className, title, children }) => {
  return (
    <div className="contents">
      <section
        className={`${className} border-b border-[#e9e9e9]  py-5 md:py-9`}
      >
        <div className="container mx-auto px-4 ">
          {/* Heading */}
          <h2 className="font-black text-xl md:text-3xl mb-4 md:mb-6 text-gray-800 capitalize">
            {title}
          </h2>
          {children}
        </div>
      </section>
    </div>
  );
};

export default Section;
