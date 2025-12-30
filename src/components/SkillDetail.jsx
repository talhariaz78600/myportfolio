import React, { useState, useEffect } from "react";
import { content } from "../Content";
import { MdArrowBack, MdCheck, MdCode, MdTimer, MdTrendingUp } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";

const SkillDetail = ({ skillId, onBack }) => {
  const [skill, setSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const foundSkill = content.skills.skills_content.find(s => s.id === skillId);
    setSkill(foundSkill);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Trigger animation
    setTimeout(() => setIsVisible(true), 100);
  }, [skillId]);

  if (!skill) {
    return (
      <div className="min-h-screen bg-[#F5F3F0] flex items-center justify-center">
        <div className="text-[#3B3835] text-xl">Skill not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-[#DDD5CA]">
        <div className="container mx-auto px-5 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#BFAF92] hover:text-[#A99A83] transition-all duration-300 mb-4"
          >
            <MdArrowBack className="text-xl" />
            <span className="font-medium">Back to Skills</span>
          </button>
          
          <div className={`flex items-center gap-6 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain transform hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#BFAF92] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {skill.proficiency}%
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#3B3835] mb-2">{skill.name}</h1>
              <p className="text-[#7A766F] text-lg">{skill.para}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-5 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Description and Features */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Description */}
            <div className={`bg-white rounded-xl p-8 shadow-lg border border-[#DDD5CA] transform transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h2 className="text-2xl font-bold text-[#3B3835] mb-4 flex items-center gap-3">
                <MdCode className="text-[#BFAF92]" />
                About {skill.name}
              </h2>
              <p className="text-[#56514D] leading-relaxed text-lg">
                {skill.description}
              </p>
            </div>

            {/* Features & Capabilities */}
            <div className={`bg-white rounded-xl p-8 shadow-lg border border-[#DDD5CA] transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h2 className="text-2xl font-bold text-[#3B3835] mb-6 flex items-center gap-3">
                <MdTrendingUp className="text-[#BFAF92]" />
                Key Features & Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {skill.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-4 rounded-lg bg-[#F5F3F0] hover:bg-[#BFAF92]/10 transition-all duration-300 transform hover:scale-105 ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <MdCheck className="text-[#BFAF92] text-xl mt-1 flex-shrink-0" />
                    <span className="text-[#56514D] leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className={`bg-white rounded-xl p-8 shadow-lg border border-[#DDD5CA] transform transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h2 className="text-2xl font-bold text-[#3B3835] mb-6 flex items-center gap-3">
                <FaProjectDiagram className="text-[#BFAF92]" />
                Notable Projects
              </h2>
              <div className="space-y-4">
                {skill.projects.map((project, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg border border-[#DDD5CA] hover:border-[#BFAF92] hover:shadow-md transition-all duration-300 transform hover:translate-x-2 ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#BFAF92] rounded-full"></div>
                      <span className="text-[#56514D] font-medium">{project}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats and Info */}
          <div className="space-y-6">
            
            {/* Experience Card */}
            <div className={`bg-white rounded-xl p-6 shadow-lg border border-[#DDD5CA] transform transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="text-center">
                <MdTimer className="text-4xl text-[#BFAF92] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#3B3835] mb-2">Experience</h3>
                <p className="text-3xl font-bold text-[#BFAF92] mb-2">{skill.experience}</p>
                <p className="text-[#7A766F]">of hands-on experience</p>
              </div>
            </div>

            {/* Proficiency Card */}
            <div className={`bg-white rounded-xl p-6 shadow-lg border border-[#DDD5CA] transform transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#DDD5CA"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#BFAF92"
                      strokeWidth="2"
                      strokeDasharray={`${skill.proficiency}, 100`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-[#3B3835]">{skill.proficiency}%</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#3B3835] mb-2">Proficiency</h3>
                <p className="text-[#7A766F]">Skill level</p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className={`bg-gradient-to-br from-[#BFAF92] to-[#A99A83] rounded-xl p-6 text-white transform transition-all duration-700 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h3 className="text-xl font-bold mb-3">Interested in this skill?</h3>
              <p className="mb-4 opacity-90">Let's discuss how I can help with your project using {skill.name}.</p>
              <button 
                onClick={() => {
                  onBack();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full bg-white text-[#3B3835] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
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
