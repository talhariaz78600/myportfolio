import { content } from "../Content";
import { useNavigate } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  const navigate = useNavigate();

  const navigateToProjectDetail = (projectId) => {
    navigate(`/project/${projectId}`);
  };
  return (
    <section className="bg-[#F5F3F0]" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title text-[#3B3835]" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle text-[#56514D]" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem] rounded-2xl"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-4xl pb-16 w-full h-full md:w-[500px] md:h-[350px] drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-2 border-[#DDD5CA] hover:border-[#BFAF92] h-fit transition-all duration-300"
              >
                <img src={content.image} alt="..." className="rounded-lg" />
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#BFAF92] text-white px-2 py-1 rounded-full text-xs font-medium">
                      {content.category}
                    </span>
                    <span className="bg-[#F5F3F0] text-[#7A766F] px-2 py-1 rounded-full text-xs font-medium">
                      {content.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-[#BFAF92] text-sm font-medium">{content.duration}</span>
                    <button 
                      onClick={() => navigateToProjectDetail(content.id)}
                      className="font-semibold text-sm  text-[#BFAF92] hover:text-[#A99A83]  hover:bg-[#BFAF92]/10 px-2  rounded transition-all duration-300"
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>

  );
};

export default Projects;
