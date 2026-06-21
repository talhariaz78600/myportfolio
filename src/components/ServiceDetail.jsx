import React, { useState, useEffect } from "react";
import { content } from "../Content";
import { MdArrowBack, MdCheck, MdBuild, MdTimer, MdAttachMoney, MdCategory } from "react-icons/md";
import { FaProjectDiagram, FaTools } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";

const wrap = "w-full max-w-5xl mx-auto px-4 sm:px-6";

const ServiceDetail = ({ serviceId, onBack }) => {
  const [service, setService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const found = content.services.service_content.find((s) => s.id === serviceId);
    setService(found);
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F5F3F0] flex items-center justify-center px-4">
        <p className="text-[#3B3835] text-lg font-Poppins">Service not found</p>
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
            Back to Services
          </button>

          <div
            className={`flex items-start gap-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative flex-shrink-0">
              <img
                src={service.logo}
                alt={service.title}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
              <div className="absolute -bottom-1 -right-1 bg-[#BFAF92] text-white rounded-full w-6 h-6 flex items-center justify-center">
                <RiServiceLine className="text-xs" />
              </div>
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3B3835] font-Poppins leading-snug">
                {service.title}
              </h1>
              <p className="text-[#7A766F] text-xs sm:text-sm mt-1 font-Poppins">{service.para}</p>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="bg-[#BFAF92] text-white px-2.5 py-0.5 rounded-full text-xs font-Poppins">
                  {service.category}
                </span>
                <span className="text-[#BFAF92] font-semibold text-xs sm:text-sm font-Poppins">
                  {service.pricing}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`${wrap} py-6 sm:py-10`}>
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6">

          {/* Left column */}
          <div className="lg:col-span-2 space-y-5">

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#DDD5CA]">
              <p className="font-bold text-[#3B3835] text-sm sm:text-base mb-3 flex items-center gap-2 font-Poppins">
                <MdBuild className="text-[#BFAF92]" /> About {service.title}
              </p>
              <p className="text-[#56514D] leading-relaxed text-sm sm:text-base font-Poppins">
                {service.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#DDD5CA]">
              <p className="font-bold text-[#3B3835] text-sm sm:text-base mb-4 flex items-center gap-2 font-Poppins">
                <MdCheck className="text-[#BFAF92]" /> What I Offer
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-[#F5F3F0]">
                    <MdCheck className="text-[#BFAF92] text-base mt-0.5 flex-shrink-0" />
                    <span className="text-[#56514D] text-xs sm:text-sm leading-relaxed font-Poppins">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#DDD5CA]">
              <p className="font-bold text-[#3B3835] text-sm sm:text-base mb-4 flex items-center gap-2 font-Poppins">
                <FaTools className="text-[#BFAF92]" /> Technologies & Tools
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {service.technologies.map((tech, i) => (
                  <div key={i} className="p-3 rounded-lg border border-[#DDD5CA] text-center hover:border-[#BFAF92] transition-colors">
                    <span className="text-[#56514D] text-xs sm:text-sm font-Poppins">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#DDD5CA]">
              <p className="font-bold text-[#3B3835] text-sm sm:text-base mb-4 flex items-center gap-2 font-Poppins">
                <FaProjectDiagram className="text-[#BFAF92]" /> Project Types
              </p>
              <div className="space-y-2">
                {service.projects.map((proj, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-[#DDD5CA] hover:border-[#BFAF92] transition-colors">
                    <div className="w-2 h-2 bg-[#BFAF92] rounded-full flex-shrink-0" />
                    <span className="text-[#56514D] text-xs sm:text-sm font-Poppins">{proj}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — stats */}
          <div className="space-y-4">

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#DDD5CA] text-center">
              <MdAttachMoney className="text-3xl text-[#BFAF92] mx-auto mb-2" />
              <p className="font-bold text-[#3B3835] text-sm mb-1 font-Poppins">Pricing</p>
              <p className="text-xl font-bold text-[#BFAF92] font-Poppins">{service.pricing}</p>
              <p className="text-[#7A766F] text-xs mt-1 font-Poppins">Custom quotes available</p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#DDD5CA] text-center">
              <MdTimer className="text-3xl text-[#BFAF92] mx-auto mb-2" />
              <p className="font-bold text-[#3B3835] text-sm mb-1 font-Poppins">Delivery</p>
              <p className="text-xl font-bold text-[#BFAF92] font-Poppins">{service.deliveryTime}</p>
              <p className="text-[#7A766F] text-xs mt-1 font-Poppins">Depends on scope</p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#DDD5CA] text-center">
              <MdCategory className="text-3xl text-[#BFAF92] mx-auto mb-2" />
              <p className="font-bold text-[#3B3835] text-sm mb-1 font-Poppins">Category</p>
              <p className="text-lg font-bold text-[#BFAF92] font-Poppins">{service.category}</p>
            </div>

            <div className="bg-gradient-to-br from-[#BFAF92] to-[#A99A83] rounded-xl p-4 sm:p-6 text-white">
              <p className="font-bold text-sm sm:text-base mb-2 font-Poppins">Ready to start?</p>
              <p className="text-xs sm:text-sm mb-4 opacity-90 font-Poppins leading-relaxed">
                Let's discuss your {service.title.toLowerCase()} project.
              </p>
              <button
                onClick={() => {
                  onBack();
                  setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100);
                }}
                className="w-full bg-white text-[#3B3835] font-Poppins font-semibold py-2.5 px-4 rounded-lg text-sm hover:bg-gray-100 transition-all"
              >
                Start Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
