// src/components/LabChallenges/ChallengeCard.jsx
const ChallengeCard = ({ challenge }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-700">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {challenge.title}
          </h3>
          <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 text-xs font-semibold rounded-full">
            {challenge.category}
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-5">
            <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-gray-200 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Problem Statement
              </h4>
              <p className="text-gray-300">{challenge.problem}</p>
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-gray-200 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Approach
              </h4>
              <p className="text-gray-300">{challenge.approach}</p>
            </div>
          </div>
          
          <div className="space-y-5">
            <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-gray-200 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {challenge.tools.map((tool, index) => (
                  <span key={index} className="bg-gray-700 px-3 py-1.5 rounded-full text-sm text-cyan-300 font-medium transition-colors hover:bg-cyan-900/40">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {challenge.screenshot && (
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-gray-200 mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Screenshot
                </h4>
                <img 
                  src={challenge.screenshot} 
                  alt={`Screenshot of ${challenge.title}`} 
                  className="rounded-lg border-2 border-gray-700 max-w-full h-auto transition-all duration-300 hover:border-cyan-500"
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-6 bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-500">
          <h4 className="font-semibold text-gray-200 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Key Lessons
          </h4>
          <ul className="space-y-2">
            {challenge.lessons.map((lesson, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {lesson}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;