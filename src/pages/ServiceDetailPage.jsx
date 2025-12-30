import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ServiceDetail from "../components/ServiceDetail";

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return <ServiceDetail serviceId={serviceId} onBack={handleBack} />;
};

export default ServiceDetailPage;
