// import content
import { createElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function navigateToSkillDetail(skillId) {
    navigate(`/skill/${skillId}`);
  }

  return (
    <section className="min-h-fit bg-[#F5F3F0]" id="skills">
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6 className="text-[#3B3835] font-semibold">{selectSkill?.name}</h6>
        </div>
        <br />
        <div className="text-[#3B3835] mb-4">
          <p className="text-sm leading-relaxed">{selectSkill?.description}</p>
        </div>
        
        {/* Experience and Proficiency */}
        <div className="flex justify-between items-center mb-4 p-3 bg-[#F5F3F0] rounded">
          <div className="text-center">
            <p className="text-xs text-[#7A766F]">Experience</p>
            <p className="font-semibold text-[#3B3835]">{selectSkill?.experience}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-[#7A766F]">Proficiency</p>
            <p className="font-semibold text-[#BFAF92]">{selectSkill?.proficiency}%</p>
          </div>
        </div>

        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-6 text-[#3B3835]">
          {selectSkill?.features?.slice(0, 4).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <br />
        <div className="flex justify-between gap-2">
          <button 
            onClick={() => {
              closeModal();
              navigateToSkillDetail(selectSkill?.id);
            }}
            className="btn bg-[#BFAF92] text-[#3B3835] hover:bg-[#A99A83] transition-all text-sm"
          >
            View Details
          </button>
          <button onClick={closeModal} className="btn bg-gray-200 text-[#3B3835] hover:bg-gray-300 transition-all text-sm">
            Close
          </button>
        </div>
      </Modal>

      {/* Content */}
      <div className="md:container px-5 py-14">
        <h2 className="title text-[#3B3835]" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle text-[#56514D]" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-6 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              onClick={() => navigateToSkillDetail(skill.id)}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
            relative group w-full flex items-center
            gap-5 p-5 max-w-sm rounded-md border-2 border-[#DDD5CA] 
            hover:border-[#BFAF92] hover:shadow-lg transition-all duration-300"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-300"
                />
              </div>
              <div>
                <h6 className="text-[#3B3835] font-semibold">{skill.name}</h6>
                <p className="italic text-[#7A766F]">{skill.para}</p>
                
                {/* Action buttons */}
                <div className="flex gap-2 mt-3">
                  <div
                    onClick={() => {
                      setSelectSkill(skill);
                      openModal();
                    }}
                    className="text-xl absolute top-3 right-3 text-[#BFAF92] hover:text-[#A99A83] transition-all cursor-pointer"
                  >
                    {createElement(skills.icon)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Skills;
