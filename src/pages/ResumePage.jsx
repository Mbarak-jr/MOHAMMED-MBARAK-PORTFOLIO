// src/pages/ResumePage.jsx
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Certifications from '../components/Resume/Certifications';

const ResumePage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">My Resume</h1>
      <Education />
      <Experience />
      <Skills />
      <Certifications />
    </div>
  );
};

export default ResumePage;