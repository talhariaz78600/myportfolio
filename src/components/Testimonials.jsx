import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      <div className="md:container px-5 pt-14">
        <h2 className="title text-[#3B3835]" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="subtitle text-[#56514D]" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[65rem] max-w-3xl"
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`duration-500 mx-8 p-8 h-full rounded-2xl flex items-center gap-6 
              border-2 bg-[#F5F3F0] border-[#DDD5CA] md:flex-row flex-col 
              transition-all ${activeIndex !== i && "scale-75 blur-sm"
                  }`}
              >
                <img src={content.img} alt="..." className="h-36 rounded-full object-cover" />
                <div className="text-[#3B3835]">
                  <p className="sm:text-base text-sm leading-relaxed">{content.review}</p>
                  <br />
                  <h6 className="font-semibold">{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

  );
};

export default Testimonials;
