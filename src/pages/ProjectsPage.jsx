// src/pages/ProjectsPage.jsx
import ProjectsGrid from '../components/Projects/ProjectsGrid';

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h1>
      <ProjectsGrid />
    </div>
  );
};

export default ProjectsPage;