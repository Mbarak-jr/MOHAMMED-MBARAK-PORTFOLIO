// src/pages/LabChallengesPage.jsx
import ChallengesList from '../components/LabChallenges/ChallengesList';

const LabChallengesPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Lab Challenges</h1>
      <ChallengesList />
    </div>
  );
};

export default LabChallengesPage;