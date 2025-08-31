// src/components/Home/HeroSection.jsx
import profileImage from '../../assets/img/mohammed-mbarak.jpg';

const HeroSection = () => {
  return (
    <section className="text-gray-800 py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px'
        }}></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-cyan-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-25 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-2/5 flex justify-center mb-10 md:mb-0">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 opacity-30 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src={profileImage} 
                alt="Mohammed Mbarak" 
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 25%' }}
                loading="eager"
              />
            </div>
          </div>
        </div>
        
        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
            Mohammed Hassan
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-700 font-medium">Cybersecurity Analyst | Software Developer</p>
          
          <div className="mb-6">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-sm">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-700">Available for security consulting</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-400/30 transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact Me
            </a>
            <a 
              href="/resume" 
              className="border-2 border-blue-500/50 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50/80 transition-all duration-300 flex items-center justify-center hover:border-blue-400 transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0 1 1 0 002 0zm2-3a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              View Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;