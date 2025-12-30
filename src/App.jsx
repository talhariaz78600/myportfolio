// import components
import { Routes, Route } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import HomePage from "./pages/HomePage";
import SkillDetailPage from "./pages/SkillDetailPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skill/:skillId" element={<SkillDetailPage />} />
        <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
      </Routes>
      <footer className="p-3 text-center text-[#3B3835] border-t border-[#D6D2CC]">
        <h6 className="mb-2 text-lg tracking-wide font-semibold"> Muhammad Talha Riaz</h6>
        <p className="text-sm">© {new Date().getFullYear()} Muhammad Talha Riaz. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
