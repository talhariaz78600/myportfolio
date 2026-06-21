import React, { useState, useEffect } from "react";
import { content } from "../Content";
import { MdArrowBack, MdCheck, MdCode, MdTimer, MdTrendingUp } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";

const wrap = "w-full max-w-5xl mx-auto px-4 sm:px-6";

const SkillDetail = ({ skillId, onBack }) => {
  const [skill, setSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const found = content.skills.skills_content.find((s) => s.id === skillId);
    setSkill(found);
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, [skillId]);

  if (!skill) {
    return (
      <div className="min-h-screen bg-[#F5F3F0] flex items-center justify-center px-4">
        <p className="text-[#3B3835] text-lg font-Poppins">Skill not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-[#DDD5CA]">
        <div className={`${wrap} py-5 sm:py-6`}>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#BFAF92] hover:text-[#A99A83] transition-colors mb-4 text-sm font-Poppins"
          >
            <MdArrowBack className="text-base" />
            Back to Skills
          </button>

          <div
            className={`flex items-center gap-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative flex-shrink-0">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
              <div className="absolute -bottom-1 -right-1 bg-[#BFAF92] text-white rounded-full w-6 h-6 flex items-center justify-center text-[10px] font-bold">
                {skill.proficiency}%
              </div>
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3B3835] font-Poppins leading-snug">
                {skill.name}
              </h1>
              <p className="text-[#7A766F] text-xs sm:text-sm mt-1 font-Poppins line-clamp-2">
                {skill.para}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`${wrap} py-6 sm:py-10`}>
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6">

          {/* Left — description + features + projects */}
          <div className="lg:col-span-2 space-y-5">

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#DDD5CA]">
              <p className="font-bold text-[#3B3835] text-sm sm:text-base mb-3 flex items-center gap-2 font-Poppins">
                <MdCode className="text-[#BFAF92]" /> About {skill.name}
              </p>
              <p className="text-[#56514D] leading-relaxed text-sm sm:text-base font-Poppins">
                {skill.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#DDD5CA]">
              <p className="font-bold text-[#3B3835] text-sm sm:text-base mb-4 flex items-center gap-2 font-Poppins">
                <MdTrendingUp className="text-[#BFAF92]" /> Key Capabilities
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skill.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-[#F5F3F0]">
                    <MdCheck className="text-[#BFAF92] text-base mt-0.5 flex-shrink-0" />
                    <span className="text-[#56514D] text-xs sm:text-sm leading-relaxed font-Poppins">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#DDD5CA]">
              <p className="font-bold text-[#3B3835] text-sm sm:text-base mb-4 flex items-center gap-2 font-Poppins">
                <FaProjectDiagram className="text-[#BFAF92]" /> Project Types
              </p>
              <div className="space-y-2">
                {skill.projects.map((proj, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-[#DDD5CA] hover:border-[#BFAF92] transition-colors">
                    <div className="w-2 h-2 bg-[#BFAF92] rounded-full flex-shrink-0" />
                    <span className="text-[#56514D] text-xs sm:text-sm font-Poppins">{proj}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — stats */}
          <div className="space-y-4">

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#DDD5CA] text-center">
              <MdTimer className="text-3xl text-[#BFAF92] mx-auto mb-2" />
              <p className="font-bold text-[#3B3835] text-sm mb-1 font-Poppins">Experience</p>
              <p className="text-2xl font-bold text-[#BFAF92] font-Poppins">{skill.experience}</p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#DDD5CA] text-center">
              <div className="relative w-20 h-20 mx-auto mb-3">
                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="#DDD5CA" strokeWidth="2.5"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="#BFAF92" strokeWidth="2.5"
                    strokeDasharray={`${skill.proficiency}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-base font-bold text-[#3B3835] font-Poppins">{skill.proficiency}%</span>
                </div>
              </div>
              <p className="font-bold text-[#3B3835] text-sm font-Poppins">Proficiency</p>
            </div>

            <div className="bg-gradient-to-br from-[#BFAF92] to-[#A99A83] rounded-xl p-4 sm:p-6 text-white">
              <p className="font-bold text-sm sm:text-base mb-2 font-Poppins">Interested?</p>
              <p className="text-xs sm:text-sm mb-4 opacity-90 font-Poppins leading-relaxed">
                Let's discuss how I can help with {skill.name}.
              </p>
              <button
                onClick={() => {
                  onBack();
                  setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100);
                }}
                className="w-full bg-white text-[#3B3835] font-Poppins font-semibold py-2.5 px-4 rounded-lg text-sm hover:bg-gray-100 transition-all"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
