import { content } from "../Content";

const Testimonials = () => {
  const { Testimonials } = content;

  return (
    <section>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="title text-[#3B3835]" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="subtitle text-[#56514D]" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {Testimonials.testimonials_content.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="p-5 sm:p-6 rounded-2xl bg-[#F5F3F0] border-2 border-[#DDD5CA] hover:border-[#BFAF92] hover:shadow-md transition-all duration-300 flex flex-col gap-4"
            >
              {/* Quote */}
              <p className="text-sm sm:text-base leading-relaxed text-[#3B3835] flex-1">
                {item.review}
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#DDD5CA]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                />
                <span className="font-semibold text-[#3B3835] text-sm font-Poppins">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
