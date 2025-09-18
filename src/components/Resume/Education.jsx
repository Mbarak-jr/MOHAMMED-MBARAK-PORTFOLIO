// src/components/Resume/Education.jsx
const Education = () => {
    return (
      <div className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500 pb-2">Education</h3>
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-500">
            <h4 className="text-2xl font-bold text-white">BSc in Mathematics</h4>
            <p className="text-gray-300 font-medium">Jomo Kenyatta University of Agriculture and Technology</p>
            <div className="mt-4 flex items-center text-gray-400">
              <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>2017- 2021</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-500">
            <h4 className="text-2xl font-bold text-white">Diploma in Software Engineering</h4>
            <p className="text-gray-300 font-medium">Academy Europe</p>
            <div className="mt-4 flex items-center text-gray-400">
              <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Completed</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Education;