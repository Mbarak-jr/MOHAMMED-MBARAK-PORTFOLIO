// src/pages/HomePage.jsx
import HeroSection from '../components/Home/HeroSection';
import ProfessionalStatement from '../components/Home/ProfessionalStatement';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 min-h-screen">
      <HeroSection />
      <ProfessionalStatement />
    </div>
  );
};

export default HomePage;