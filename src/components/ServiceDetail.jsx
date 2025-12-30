import React, { useState, useEffect } from "react";
import { content } from "../Content";
import { MdArrowBack, MdCheck, MdBuild, MdTimer, MdAttachMoney, MdCategory } from "react-icons/md";
import { FaProjectDiagram, FaTools } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";

const ServiceDetail = ({ serviceId, onBack }) => {
  const [service, setService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const foundService = content.services.service_content.find(s => s.id === serviceId);
    setService(foundService);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Trigger animation
    setTimeout(() => setIsVisible(true), 100);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F5F3F0] flex items-center justify-center">
        <div className="text-[#3B3835] text-xl">Service not found</div>
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
            <span className="font-medium">Back to Services</span>
          </button>
          
          <div className={`flex items-center gap-6 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative">
              <img
                src={service.logo}
                alt={service.title}
                className="w-16 h-16 object-contain transform hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#BFAF92] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                <RiServiceLine />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#3B3835] mb-2">{service.title}</h1>
              <p className="text-[#7A766F] text-lg">{service.para}</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="bg-[#BFAF92] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {service.category}
                </span>
                <span className="text-[#BFAF92] font-semibold">{service.pricing}</span>
              </div>
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
                <MdBuild className="text-[#BFAF92]" />
                About {service.title}
              </h2>
              <p className="text-[#56514D] leading-relaxed text-lg">
                {service.description}
              </p>
            </div>

            {/* Features & What I Offer */}
            <div className={`bg-white rounded-xl p-8 shadow-lg border border-[#DDD5CA] transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h2 className="text-2xl font-bold text-[#3B3835] mb-6 flex items-center gap-3">
                <MdCheck className="text-[#BFAF92]" />
                What I Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
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

            {/* Technologies */}
            <div className={`bg-white rounded-xl p-8 shadow-lg border border-[#DDD5CA] transform transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h2 className="text-2xl font-bold text-[#3B3835] mb-6 flex items-center gap-3">
                <FaTools className="text-[#BFAF92]" />
                Technologies & Tools
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {service.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border border-[#DDD5CA] text-center hover:border-[#BFAF92] hover:shadow-md transition-all duration-300 transform hover:scale-105 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <span className="text-[#56514D] font-medium text-sm">{tech}</span>
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
                Recent Projects
              </h2>
              <div className="space-y-4">
                {service.projects.map((project, index) => (
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
            
            {/* Pricing Card */}
            <div className={`bg-white rounded-xl p-6 shadow-lg border border-[#DDD5CA] transform transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="text-center">
                <MdAttachMoney className="text-4xl text-[#BFAF92] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#3B3835] mb-2">Pricing</h3>
                <p className="text-2xl font-bold text-[#BFAF92] mb-2">{service.pricing}</p>
                <p className="text-[#7A766F] text-sm">Custom quotes available</p>
              </div>
            </div>

            {/* Delivery Time Card */}
            <div className={`bg-white rounded-xl p-6 shadow-lg border border-[#DDD5CA] transform transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="text-center">
                <MdTimer className="text-4xl text-[#BFAF92] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#3B3835] mb-2">Delivery Time</h3>
                <p className="text-2xl font-bold text-[#BFAF92] mb-2">{service.deliveryTime}</p>
                <p className="text-[#7A766F] text-sm">Depends on project scope</p>
              </div>
            </div>

            {/* Category Card */}
            <div className={`bg-white rounded-xl p-6 shadow-lg border border-[#DDD5CA] transform transition-all duration-700 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="text-center">
                <MdCategory className="text-4xl text-[#BFAF92] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#3B3835] mb-2">Category</h3>
                <p className="text-xl font-bold text-[#BFAF92]">{service.category}</p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className={`bg-gradient-to-br from-[#BFAF92] to-[#A99A83] rounded-xl p-6 text-white transform transition-all duration-700 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
              <p className="mb-4 opacity-90">Let's discuss your {service.title.toLowerCase()} project and bring your vision to life.</p>
              <button 
                onClick={() => {
                  onBack();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full bg-white text-[#3B3835] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
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
