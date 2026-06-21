import { content } from "../Content";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { services } = content;
  const navigate = useNavigate();

  return (
    <section id="services">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="title text-[#3B3835]" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle text-[#56514D]" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 group">
          {services.service_content.map((svc, i) => (
            <div
              key={i}
              onClick={() => navigate(`/service/${svc.id}`)}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="cursor-pointer border-2 border-[#DDD5CA] rounded-2xl text-center bg-[#F5F3F0] p-5 sm:p-6 group-hover:blur-sm hover:!blur-none hover:border-[#BFAF92] hover:shadow-lg transition-all duration-300"
            >
              <img
                src={svc.logo}
                alt=""
                className="mx-auto w-14 h-14 sm:w-16 sm:h-16 object-contain mb-3"
              />
              <p className="font-bold text-[#3B3835] text-base sm:text-lg mb-2 font-Poppins">
                {svc.title}
              </p>
              <p className="text-[#7A766F] text-xs sm:text-sm leading-relaxed font-Poppins">
                {svc.para}
              </p>
              <div className="mt-3">
                <span className="inline-block bg-[#BFAF92]/15 text-[#BFAF92] text-[10px] px-3 py-1 rounded-full font-Poppins font-medium border border-[#BFAF92]/30">
                  {svc.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
