import React, { useState, useEffect } from "react";
import { content } from "../Content";
import {
  MdArrowBack, MdCheck, MdTimer, MdPerson, MdTrendingUp, MdStar,
} from "react-icons/md";
import {
  FaProjectDiagram, FaTools, FaGithub, FaPlay, FaLightbulb, FaAward, FaRocket,
} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

const wrap = "w-full max-w-5xl mx-auto px-4 sm:px-6";

const ProjectDetail = ({ projectId, onBack }) => {
  const [project, setProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const found = content.Projects.project_content.find((p) => p.id === projectId);
    setProject(found);
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F5F3F0] flex items-center justify-center px-4">
        <p className="text-[#3B3835] text-lg">Project not found</p>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: FaProjectDiagram },
    { id: "features", label: "Features", icon: MdCheck },
    { id: "tech", label: "Tech", icon: FaTools },
    { id: "challenges", label: "Challenges", icon: FaLightbulb },
    { id: "results", label: "Results", icon: FaAward },
  ];

  const renderTabContent = () => {
    const cardCls = "bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#DDD5CA]";
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-4">
            <div className={cardCls}>
              <p className="font-bold text-[#3B3835] text-sm sm:text-base mb-3 flex items-center gap-2 font-Poppins">
                <FaProjectDiagram className="text-[#BFAF92] flex-shrink-0" /> Project Overview
              </p>
              <p className="text-[#56514D] leading-relaxed text-sm sm:text-base font-Poppins">
                {project.overview}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={cardCls}>
                <p className="font-bold text-[#3B3835] text-sm mb-2 flex items-center gap-2 font-Poppins">
                  <MdTimer className="text-[#BFAF92]" /> Timeline
                </p>
                <p className="text-[#56514D] text-sm font-Poppins">{project.duration}</p>
              </div>
              <div className={cardCls}>
                <p className="font-bold text-[#3B3835] text-sm mb-2 flex items-center gap-2 font-Poppins">
                  <MdPerson className="text-[#BFAF92]" /> Client
                </p>
                <p className="text-[#56514D] text-sm font-Poppins">{project.client}</p>
              </div>
            </div>
          </div>
        );
      case "features":
        return (
          <div className={cardCls}>
            <p className="font-bold text-[#3B3835] text-sm sm:text-base mb-4 flex items-center gap-2 font-Poppins">
              <MdCheck className="text-[#BFAF92]" /> Key Features
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-[#F5F3F0]">
                  <MdCheck className="text-[#BFAF92] text-base mt-0.5 flex-shrink-0" />
                  <span className="text-[#56514D] text-xs sm:text-sm leading-relaxed font-Poppins">{f}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "tech":
        return (
          <div className={cardCls}>
            <p className="font-bold text-[#3B3835] text-sm sm:text-base mb-4 flex items-center gap-2 font-Poppins">
              <FaTools className="text-[#BFAF92]" /> Technologies Used
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.technologies.map((tech, i) => (
                <div key={i} className="p-3 rounded-lg border border-[#DDD5CA] text-center bg-[#F5F3F0] hover:border-[#BFAF92] transition-colors">
                  <BiCodeAlt className="text-xl text-[#BFAF92] mx-auto mb-1" />
                  <span className="text-[#56514D] text-xs font-Poppins">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "challenges":
        return (
          <div className={cardCls}>
            <p className="font-bold text-[#3B3835] text-sm sm:text-base mb-4 flex items-center gap-2 font-Poppins">
              <FaLightbulb className="text-[#BFAF92]" /> Technical Challenges
            </p>
            <div className="space-y-3">
              {project.challenges.map((c, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-lg border border-[#DDD5CA] hover:border-[#BFAF92] transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-[#BFAF92] text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-[#56514D] text-xs sm:text-sm leading-relaxed font-Poppins">{c}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "results":
        return (
          <div className={cardCls}>
            <p className="font-bold text-[#3B3835] text-sm sm:text-base mb-4 flex items-center gap-2 font-Poppins">
              <FaAward className="text-[#BFAF92]" /> Results & Impact
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.results.map((r, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-lg bg-[#BFAF92]/10 border border-[#DDD5CA] hover:shadow-sm transition-all">
                  <div className="flex items-start gap-2">
                    <MdTrendingUp className="text-[#BFAF92] text-lg mt-0.5 flex-shrink-0" />
                    <span className="text-[#56514D] text-xs sm:text-sm font-Poppins leading-relaxed">{r}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#3B3835] to-[#56514D] text-white">
        <div className={`${wrap} py-6 sm:py-10`}>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-5 text-sm font-Poppins"
          >
            <MdArrowBack /> Back to Projects
          </button>

          <div
            className={`flex flex-col gap-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#BFAF92] text-white px-3 py-1 rounded-full text-xs font-Poppins font-medium">
                {project.category}
              </span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-Poppins">
                {project.type}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-Poppins leading-tight">
              {project.title}
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-Poppins max-w-2xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#BFAF92] hover:bg-[#A99A83] text-white px-4 py-2.5 rounded-lg text-sm font-Poppins font-medium transition-all"
              >
                <FaPlay className="text-xs" /> View Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2.5 rounded-lg text-sm font-Poppins font-medium transition-all"
              >
                <FaGithub /> Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="bg-white border-b border-[#DDD5CA]">
        <div className={`${wrap} py-3`}>
          <div className="flex flex-wrap items-center gap-4 text-sm font-Poppins">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
              <span className="text-[#3B3835] font-medium">{project.status}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#7A766F]">
              <MdTimer />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#7A766F]">
              <MdStar className="text-yellow-500" />
              <span>Featured Project</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-[#DDD5CA] sticky top-0 z-40">
        <div className={wrap}>
          <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 sm:px-5 py-3 border-b-2 whitespace-nowrap text-xs sm:text-sm font-Poppins font-medium transition-all ${
                  activeTab === tab.id
                    ? "border-[#BFAF92] text-[#BFAF92]"
                    : "border-transparent text-[#7A766F] hover:text-[#3B3835]"
                }`}
              >
                <tab.icon className="text-sm flex-shrink-0" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className={`${wrap} py-6 sm:py-10`}>
        <div
          className={`transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {renderTabContent()}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#BFAF92] to-[#A99A83] text-white">
        <div className={`${wrap} py-10 text-center`}>
          <FaRocket className="text-3xl mx-auto mb-3" />
          <h2 className="text-lg sm:text-2xl font-bold mb-3 font-Poppins text-white">
            Interested in a similar project?
          </h2>
          <p className="text-sm sm:text-base mb-5 opacity-90 font-Poppins max-w-xl mx-auto">
            Let's collaborate to bring your ideas to life with cutting-edge technology.
          </p>
          <button
            onClick={() => {
              onBack();
              setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100);
            }}
            className="bg-white text-[#3B3835] font-Poppins font-semibold py-2.5 px-7 rounded-lg text-sm sm:text-base hover:bg-gray-100 transition-all"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
