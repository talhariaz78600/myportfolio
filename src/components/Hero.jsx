import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="w-full">

      {/* ══════════════════════════════════
          MOBILE LAYOUT  (hidden on md+)
      ══════════════════════════════════ */}
      <div className="flex flex-col md:hidden">

        {/* Dark top: navbar clearance + image */}
        <div className="bg-[#101012] flex justify-center items-end" style={{ minHeight: "45vh", paddingTop: "4.5rem" }}>
          <img
            src={hero.image}
            alt="Muhammad Talha Riaz"
            className="h-56 w-auto object-cover object-top"
          />
        </div>

        {/* Light bottom: all text */}
        <div className="bg-white px-5 py-8">
          <h1 className="font-Inria font-bold text-[#2C2A28] text-2xl leading-snug">
            {hero.title}
          </h1>
          <p className="text-[#56514D] mt-3 text-sm leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="mt-5">
            <a
              href="#contact"
              className="inline-block px-6 py-2.5 border-2 border-[#BFAF92] text-[#2C2A28] rounded-md rounded-br-3xl text-sm font-Poppins font-medium hover:bg-[#BFAF92] hover:text-white transition-all duration-300"
            >
              {hero.btnText}
            </a>
          </div>

          <div className="mt-7 flex flex-col gap-5">
            {hero.hero_content.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-Paprika text-4xl text-[#BFAF92] leading-none flex-shrink-0">
                  {item.count}
                </span>
                <p className="text-[#56514D] text-sm leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          DESKTOP LAYOUT  (hidden below md)
      ══════════════════════════════════ */}
      <div className="hidden md:flex min-h-screen">

        {/* Left panel: text */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-16 py-24">
          <h1 className="font-Inria font-bold text-[#2C2A28] text-4xl lg:text-5xl leading-tight whitespace-pre-line">
            {hero.title}
          </h1>
          <p className="text-[#56514D] mt-5 text-base lg:text-lg leading-relaxed max-w-lg">
            {hero.subtitle}
          </p>
          <div className="mt-7">
            <a
              href="#contact"
              className="inline-block px-9 py-2.5 border-2 border-[#BFAF92] text-[#2C2A28] rounded-md rounded-br-3xl font-Poppins font-medium hover:bg-[#BFAF92] hover:text-white transition-all duration-300"
            >
              {hero.btnText}
            </a>
          </div>

          <div className="mt-10 flex gap-10 lg:gap-14">
            {hero.hero_content.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-Paprika text-5xl text-[#BFAF92] leading-none">
                  {item.count}
                </span>
                <p className="text-[#56514D] text-sm leading-snug max-w-[8rem]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel: dark + vertical name strip + person image */}
        <div className="w-5/12 bg-[#101012] flex overflow-hidden">

          {/* Vertical name strip — left edge of dark panel */}
          <div className="w-8 flex-shrink-0 flex items-center justify-center py-10">
            <span
              className="text-[#BFAF92] font-Inria font-bold text-sm tracking-[0.25em] select-none whitespace-nowrap"
              style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
            >
              {hero.firstName}
            </span>
            <span
              className="text-[#E7E5E1] font-Inria font-bold text-sm tracking-[0.25em] select-none whitespace-nowrap mt-3"
              style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
            >
              {hero.LastName}
            </span>
          </div>

          {/* Person image fills remaining width */}
          <div className="flex-1 flex items-end justify-center overflow-hidden">
            <img
              src={hero.image}
              alt="Muhammad Talha Riaz"
              data-aos="fade-up"
              className="h-[92%] w-auto object-cover object-top"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
