import { Routes, Route } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import HomePage from "./pages/HomePage";
import SkillDetailPage from "./pages/SkillDetailPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 50,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skill/:skillId" element={<SkillDetailPage />} />
        <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
      </Routes>
      <footer className="p-4 text-center border-t border-[#D6D2CC] bg-white">
        <p className="font-bold text-[#3B3835] text-base mb-1 font-Poppins">Muhammad Talha Riaz</p>
        <p className="text-xs sm:text-sm text-[#7A766F] font-Poppins">
          © {new Date().getFullYear()} Muhammad Talha Riaz. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
