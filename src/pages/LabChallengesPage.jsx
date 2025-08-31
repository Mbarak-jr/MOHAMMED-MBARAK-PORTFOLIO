// src/pages/LabChallengesPage.jsx
import ChallengesList from '../components/LabChallenges/ChallengesList';

const LabChallengesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Lab Challenges
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Hands-on cybersecurity challenges demonstrating practical skills in various security domains.
          </p>
        </div>
        <ChallengesList />
      </div>
    </div>
  );
};

export default LabChallengesPage;