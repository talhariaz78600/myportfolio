import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return <ProjectDetail projectId={projectId} onBack={handleBack} />;
};

export default ProjectDetailPage;
