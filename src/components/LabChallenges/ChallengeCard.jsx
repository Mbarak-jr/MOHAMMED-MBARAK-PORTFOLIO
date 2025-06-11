// src/components/LabChallenges/ChallengeCard.jsx
const ChallengeCard = ({ challenge }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{challenge.title}</h3>
          <p className="text-gray-600 mb-4"><span className="font-semibold">Category:</span> {challenge.category}</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Problem Statement:</h4>
            <p className="text-gray-600">{challenge.problem}</p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Approach:</h4>
            <p className="text-gray-600">{challenge.approach}</p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Tools Used:</h4>
            <div className="flex flex-wrap gap-2">
              {challenge.tools.map((tool, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          {challenge.screenshot && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Screenshot:</h4>
              <img 
                src={challenge.screenshot} 
                alt={`Screenshot of ${challenge.title}`} 
                className="rounded-lg border border-gray-200 max-w-full h-auto"
              />
            </div>
          )}
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Key Lessons:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {challenge.lessons.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default ChallengeCard;