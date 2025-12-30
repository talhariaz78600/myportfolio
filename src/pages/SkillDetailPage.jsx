import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SkillDetail from "../components/SkillDetail";

const SkillDetailPage = () => {
  const { skillId } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return <SkillDetail skillId={skillId} onBack={handleBack} />;
};

export default SkillDetailPage;
