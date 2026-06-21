import { useState } from "react";
import { content } from "../Content";
import { useNavigate } from "react-router-dom";
import { FaMobileAlt, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ proj, onViewDetails }) => {
  const [loaded, setLoaded] = useState(false);
  const isApp = proj.demoLink.includes("play.google.com");

  return (
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-[#DDD5CA] hover:border-[#BFAF92] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Preview area */}
      <div className="relative w-full h-44 overflow-hidden bg-[#F0EDE8] flex-shrink-0">
        {isApp ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <FaMobileAlt className="text-4xl text-[#BFAF92]" />
            <span className="text-xs font-semibold text-[#3B3835] font-Poppins">{proj.type}</span>
            <span className="text-[10px] text-[#7A766F] uppercase tracking-widest font-Poppins">
              Mobile App
            </span>
          </div>
        ) : (
          <>
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#F0EDE8]">
                <div className="w-7 h-7 border-4 border-[#BFAF92] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <iframe
              src={proj.demoLink}
              title={proj.title}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "200%",
                height: "200%",
                transform: "scale(0.5)",
                transformOrigin: "top left",
                border: "none",
                pointerEvents: "none",
              }}
            />
          </>
        )}
        {/* Transparent overlay so the card captures clicks, not the iframe */}
        <div className="absolute inset-0 z-20" />
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="font-bold text-[#3B3835] text-sm sm:text-base leading-snug font-Poppins">
          {proj.title}
        </p>
        <div className="flex flex-wrap gap-1.5">
          <span className="bg-[#BFAF92] text-white px-2 py-0.5 rounded-full text-[10px] font-medium">
            {proj.category}
          </span>
          <span className="bg-[#F5F3F0] text-[#7A766F] border border-[#DDD5CA] px-2 py-0.5 rounded-full text-[10px]">
            {proj.type}
          </span>
        </div>
        <p className="text-[11px] sm:text-xs text-[#7A766F] leading-relaxed line-clamp-2 flex-1 font-Poppins">
          {proj.description}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-[#EEE9E2] mt-auto">
          <a
            href={proj.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-[10px] sm:text-xs text-[#BFAF92] hover:text-[#A99A83] font-medium transition-colors font-Poppins"
          >
            <FaExternalLinkAlt className="text-[9px]" />
            {isApp ? "Play Store" : "Live Site"}
          </a>
          <button
            onClick={onViewDetails}
            className="text-[10px] sm:text-xs font-semibold text-[#BFAF92] hover:text-white hover:bg-[#BFAF92] px-2 py-1 rounded transition-all duration-200 font-Poppins"
          >
            DETAILS →
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { Projects } = content;
  const navigate = useNavigate();

  return (
    <section className="bg-[#F5F3F0]" id="projects">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="title text-[#3B3835]" data-aos="fade-down">
          {Projects.title}
        </h2>
        <h4 className="subtitle text-[#56514D]" data-aos="fade-down">
          {Projects.subtitle}
        </h4>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {Projects.project_content.map((proj, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={Math.min(i * 50, 300)}
              className="h-full"
            >
              <ProjectCard
                proj={proj}
                onViewDetails={() => navigate(`/project/${proj.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
