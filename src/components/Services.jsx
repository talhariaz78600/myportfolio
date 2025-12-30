import { content } from "../Content";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { services } = content;
  const navigate = useNavigate();

  const navigateToServiceDetail = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };
  return (
    <section id="services">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-8 py-10 md:py-14">
        <h2
          className="title text-[#3B3835] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          data-aos="fade-down"
        >
          {services.title}
        </h2>
        <h4
          className="subtitle text-[#56514D] text-base sm:text-lg md:text-xl"
          data-aos="fade-down"
        >
          {services.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center group w-full">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              onClick={() => navigateToServiceDetail(content.id)}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] max-w-xs w-full duration-300 cursor-pointer border-2 border-[#DDD5CA] rounded-xl text-center bg-[#F5F3F0] p-4 sm:p-6 flex-1 group-hover:blur-sm hover:!blur-none hover:border-[#BFAF92] hover:shadow-md transition-all relative"
            >
              <img
                src={content.logo}
                alt="..."
                className="mx-auto w-14 h-14 sm:w-16 sm:h-16 object-contain"
              />
              <h6 className="my-3 text-[#3B3835] font-semibold text-lg sm:text-xl">
                {content.title}
              </h6>
              <p className="leading-7 text-[#7A766F] mb-4 text-sm sm:text-base">
                {content.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
