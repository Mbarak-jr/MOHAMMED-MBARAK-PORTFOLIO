// src/components/Home/HeroSection.jsx
import profileImage from '../../assets/img/mohammed-mbarak.jpg';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img 
              src={profileImage} 
              alt="Mohammed Mbarak" 
              className="w-full h-full object-cover object-center"  // Added object-center
              style={{ objectPosition: 'center 25%' }}  // Adjust this percentage as needed
              loading="eager"
            />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mohammed Mbarak</h1>
          <p className="text-xl md:text-2xl mb-6">Cybersecurity Specialist | Software Developer</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact Me
            </a>
            <a 
              href="/resume" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0 1 1 0 002 0zm2-3a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;