// src/pages/ResumePage.jsx
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Certifications from '../components/Resume/Certifications';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            My Resume
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            A comprehensive overview of my education, experience, skills, and certifications in cybersecurity and software development.
          </p>
        </div>

        <Education />
        <Experience />
        <Skills />
        <Certifications />

        {/* Download CV Button */}
        <div className="mt-12 text-center">
          <a
            href="https://drive.google.com/uc?export=download&id=1BUEzUI6t4qAD_xgXE4KvGtGArB3rZrsZ"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
          >
            📄 Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
