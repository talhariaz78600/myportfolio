import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-[#F5F3F0]" id="hireme">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="title text-[#3B3835]" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle text-[#56514D]" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <img
            src={Hireme.image1}
            alt="Muhammad Talha Riaz"
            data-aos="fade-right"
            className="w-48 sm:w-56 md:w-64 rounded-2xl flex-shrink-0"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-[#3B3835] w-full max-w-lg p-5 sm:p-7 shadow-sm rounded-xl rounded-br-[6rem]"
          >
            <p className="leading-7 text-[#3B3835] text-sm sm:text-base font-Poppins">
              {Hireme.para}
            </p>
            <br />
            <a
              href="#contact"
              className="btn bg-[#3B3835] text-white hover:bg-[#BFAF92] hover:border-[#BFAF92] transition-all duration-300 inline-block text-center"
            >
              {Hireme.btnText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
