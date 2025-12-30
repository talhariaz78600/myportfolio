import React, { useState, useEffect } from "react";
import { content } from "../Content";
import { 
  MdArrowBack, 
  MdCheck, 
  MdCode, 
  MdTimer, 
  MdPerson, 
  MdTrendingUp,
  MdLaunch,
  MdPhoneAndroid,
  MdWeb,
  MdStar
} from "react-icons/md";
import { 
  FaProjectDiagram, 
  FaTools, 
  FaGithub, 
  FaPlay,
  FaLightbulb,
  FaAward,
  FaRocket
} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

const ProjectDetail = ({ projectId, onBack }) => {
  const [project, setProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const foundProject = content.Projects.project_content.find(p => p.id === projectId);
    setProject(foundProject);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Trigger animation
    setTimeout(() => setIsVisible(true), 100);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F5F3F0] flex items-center justify-center">
        <div className="text-[#3B3835] text-xl">Project not found</div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FaProjectDiagram },
    { id: 'features', label: 'Features', icon: MdCheck },
    { id: 'tech', label: 'Technology', icon: FaTools },
    { id: 'challenges', label: 'Challenges', icon: FaLightbulb },
    { id: 'results', label: 'Results', icon: FaAward }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#DDD5CA]">
              <h3 className="text-xl font-bold text-[#3B3835] mb-4 flex items-center gap-3">
                <FaProjectDiagram className="text-[#BFAF92]" />
                Project Overview
              </h3>
              <p className="text-[#56514D] leading-relaxed text-lg">{project.overview}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#DDD5CA]">
                <h4 className="font-bold text-[#3B3835] mb-3 flex items-center gap-2">
                  <MdTimer className="text-[#BFAF92]" />
                  Project Timeline
                </h4>
                <p className="text-[#56514D]">{project.duration}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#DDD5CA]">
                <h4 className="font-bold text-[#3B3835] mb-3 flex items-center gap-2">
                  <MdPerson className="text-[#BFAF92]" />
                  Client
                </h4>
                <p className="text-[#56514D]">{project.client}</p>
              </div>
            </div>
          </div>
        );
      
      case 'features':
        return (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-[#DDD5CA]">
            <h3 className="text-xl font-bold text-[#3B3835] mb-6 flex items-center gap-3">
              <MdCheck className="text-[#BFAF92]" />
              Key Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-[#F5F3F0] hover:bg-[#BFAF92]/10 transition-all duration-300 transform hover:scale-105"
                >
                  <MdCheck className="text-[#BFAF92] text-xl mt-1 flex-shrink-0" />
                  <span className="text-[#56514D] leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'tech':
        return (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-[#DDD5CA]">
            <h3 className="text-xl font-bold text-[#3B3835] mb-6 flex items-center gap-3">
              <FaTools className="text-[#BFAF92]" />
              Technologies Used
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-[#DDD5CA] text-center hover:border-[#BFAF92] hover:shadow-md transition-all duration-300 transform hover:scale-105 bg-[#F5F3F0]"
                >
                  <BiCodeAlt className="text-2xl text-[#BFAF92] mx-auto mb-2" />
                  <span className="text-[#56514D] font-medium text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'challenges':
        return (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-[#DDD5CA]">
            <h3 className="text-xl font-bold text-[#3B3835] mb-6 flex items-center gap-3">
              <FaLightbulb className="text-[#BFAF92]" />
              Technical Challenges
            </h3>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-[#DDD5CA] hover:border-[#BFAF92] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#BFAF92] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-[#56514D] leading-relaxed">{challenge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'results':
        return (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-[#DDD5CA]">
            <h3 className="text-xl font-bold text-[#3B3835] mb-6 flex items-center gap-3">
              <FaAward className="text-[#BFAF92]" />
              Project Results & Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-gradient-to-r from-[#BFAF92]/10 to-[#A99A83]/10 border border-[#DDD5CA] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <MdTrendingUp className="text-[#BFAF92] text-2xl mt-1 flex-shrink-0" />
                    <span className="text-[#56514D] font-medium leading-relaxed">{result}</span>
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
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#3B3835] to-[#56514D] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-5 py-12 relative z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 mb-6"
          >
            <MdArrowBack className="text-xl" />
            <span className="font-medium">Back to Projects</span>
          </button>
          
          <div className={`grid lg:grid-cols-2 gap-8 items-center transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#BFAF92] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.type}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-[#BFAF92] hover:bg-[#A99A83] text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <FaPlay className="text-sm" />
                  View Demo
                </button>
                <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <FaGithub className="text-lg" />
                  Source Code
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#BFAF92] text-white p-3 rounded-full">
                <MdPhoneAndroid className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-white border-b border-[#DDD5CA]">
        <div className="container mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-[#3B3835] font-medium">{project.status}</span>
              </div>
              <div className="flex items-center gap-2 text-[#7A766F]">
                <MdTimer />
                <span>{project.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MdStar className="text-yellow-500" />
              <span className="text-[#3B3835] font-medium">Featured Project</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-[#DDD5CA] sticky top-0 z-40">
        <div className="container mx-auto px-5">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#BFAF92] text-[#BFAF92] bg-[#BFAF92]/5'
                    : 'border-transparent text-[#7A766F] hover:text-[#3B3835] hover:border-[#DDD5CA]'
                }`}
              >
                <tab.icon className="text-lg" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-5 py-12">
        <div className={`transform transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {renderTabContent()}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#BFAF92] to-[#A99A83] text-white">
        <div className="container mx-auto px-5 py-12 text-center">
          <FaRocket className="text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Interested in a similar project?</h3>
          <p className="text-xl mb-6 opacity-90">
            Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <button 
            onClick={() => {
              onBack();
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-white text-[#3B3835] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
