import { createElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { content } from "../Content";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "24rem",
    width: "92%",
    borderRadius: "1rem",
    padding: "1.5rem",
  },
  overlay: {
    padding: "1rem",
    zIndex: 9999,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);
  const navigate = useNavigate();

  function openModal(skill, e) {
    e.stopPropagation();
    setSelectSkill(skill);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-[#F5F3F0]" id="skills">
      {/* Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <div className="flex items-center gap-3 mb-4">
          <img className="h-10 w-10 object-contain" src={selectSkill?.logo} alt="" />
          <h6 className="text-[#3B3835] text-base font-semibold font-Poppins">{selectSkill?.name}</h6>
        </div>
        <p className="text-sm leading-relaxed text-[#3B3835] mb-4 font-Poppins">
          {selectSkill?.description}
        </p>
        <div className="flex justify-between items-center mb-4 p-3 bg-[#F5F3F0] rounded-lg">
          <div className="text-center">
            <p className="text-xs text-[#7A766F] font-Poppins">Experience</p>
            <p className="font-semibold text-[#3B3835] text-sm font-Poppins">{selectSkill?.experience}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-[#7A766F] font-Poppins">Proficiency</p>
            <p className="font-semibold text-[#BFAF92] text-sm font-Poppins">{selectSkill?.proficiency}%</p>
          </div>
        </div>
        <ul className="list-decimal px-4 font-Poppins text-xs sm:text-sm leading-7 text-[#3B3835] mb-5">
          {selectSkill?.features?.slice(0, 4).map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <div className="flex justify-between gap-3">
          <button
            onClick={() => {
              closeModal();
              navigate(`/skill/${selectSkill?.id}`);
            }}
            className="flex-1 btn bg-[#BFAF92] text-white hover:bg-[#A99A83] transition-all text-sm border-[#BFAF92]"
          >
            View Details
          </button>
          <button
            onClick={closeModal}
            className="flex-1 btn bg-[#F5F3F0] text-[#3B3835] hover:bg-[#DDD5CA] transition-all text-sm border-[#DDD5CA]"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="title text-[#3B3835]" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle text-[#56514D]" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              onClick={() => navigate(`/skill/${skill.id}`)}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white cursor-pointer relative group flex items-start gap-4 p-4 sm:p-5 rounded-xl border-2 border-[#DDD5CA] hover:border-[#BFAF92] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <img
                  src={skill.logo}
                  alt=""
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain group-hover:scale-110 duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#3B3835] font-bold text-sm sm:text-base font-Poppins leading-snug">
                  {skill.name}
                </p>
                <p className="italic text-[#7A766F] text-xs sm:text-sm mt-1 leading-relaxed font-Poppins">
                  {skill.para}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-[#BFAF92]/20 text-[#BFAF92] text-[10px] px-2 py-0.5 rounded-full font-Poppins font-medium">
                    {skill.experience}
                  </span>
                  <span className="bg-[#F5F3F0] text-[#7A766F] text-[10px] px-2 py-0.5 rounded-full border border-[#DDD5CA] font-Poppins">
                    {skill.proficiency}%
                  </span>
                </div>
              </div>
              {/* Quick-info button */}
              <button
                onClick={(e) => openModal(skill, e)}
                className="absolute top-3 right-3 text-xl text-[#BFAF92] hover:text-[#A99A83] transition-colors"
                title="Quick info"
              >
                {createElement(skills.icon)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
