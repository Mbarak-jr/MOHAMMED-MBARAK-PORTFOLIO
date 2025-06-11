// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ResumePage from '../pages/ResumePage';
import ProjectsPage from '../pages/ProjectsPage';
import LabChallengesPage from '../pages/LabChallengesPage';
import ContactPage from '../pages/ContactPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/lab-challenges" element={<LabChallengesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;