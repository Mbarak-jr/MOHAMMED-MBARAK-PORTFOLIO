// src/components/Resume/Education.jsx
const Education = () => {
    return (
      <div className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Education</h3>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <h4 className="text-2xl font-bold text-gray-800">BSc in Mathematics</h4>
            <p className="text-gray-600 font-medium">Jomo Kenyatta University of Agriculture and Technology</p>
            <div className="mt-4 flex items-center text-gray-500">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>2018 - 2022</span>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <h4 className="text-2xl font-bold text-gray-800">ICDL Certificate</h4>
            <p className="text-gray-600 font-medium">Coast Institute of Technology</p>
            <div className="mt-4 flex items-center text-gray-500">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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