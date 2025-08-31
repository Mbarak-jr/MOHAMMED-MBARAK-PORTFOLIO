// src/pages/ProjectsPage.jsx
import ProjectsGrid from '../components/Projects/ProjectsGrid';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Explore my portfolio of full-stack applications, security tools, and innovative solutions.
          </p>
        </div>
        <ProjectsGrid />
      </div>
    </div>
  );
};

export default ProjectsPage;