// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden w-full">
      <div className="min-h-screen relative flex flex-col-reverse md:flex-row md:items-end justify-center items-center px-0 sm:px-4 md:px-8 lg:px-16 xl:px-24 gap-8 md:gap-0 w-full max-w-full">
        {/* furqan */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-full sm:w-8/12 top-0 right-0 bottom-0 -z-10"
          style={{
            background: "linear-gradient(135deg, #3B3835 0%, #56514D 100%)",
          }}
        >
          <h1 className="rotate-90 absolute md:top-[40%] top-[30%] right-[-30%] text-[#E7E5E1] text-3xl md:text-5xl lg:text-6xl whitespace-nowrap">
            {hero.firstName}{" "}
            <span className="text-[#BFAF92]">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div
          className="pb-10 pt-5 w-full max-w-xl mx-auto md:mx-0 px-4 sm:px-0"
          data-aos="fade-down"
        >
          <h2
            className="text-white md:text-[#2C2A28] leading-tight  text-xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ whiteSpace: "pre-line" }}
          >
            {hero.title}
          </h2>
          <p className="text-white sm:text-[#2C2A28] mt-3  leading-relaxed text-base sm:text-sm md:text-xl">
            {hero.subtitle}
          </p>
          <br />
          <div className="flex justify-end">
            <button className="btn bg-transparent border border-[#BFAF92] text-white sm:text-[#2C2A28] hover:bg-[#BFAF92] hover:border-[#BFAF92] hover:text-[#2C2A28] px-4 py-2 text-sm md:text-base">
              {hero.btnText}
            </button>
          </div>
          <div className="flex flex-col gap-6 mt-8">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-full max-w-xs gap-4 sm:gap-5 text-base sm:text-lg md:text-xl ${
                  i === 1 ? " flex-row-reverse text-right" : ""
                }`}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-64 sm:h-80 lg:h-[37rem] flex items-center justify-center w-full max-w-md mx-auto md:mx-0">
          <img
            src={hero.image}
            data-aos="slide-up"
            className="h-full w-auto object-cover rounded-xl shadow-lg"
            alt="..."
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
