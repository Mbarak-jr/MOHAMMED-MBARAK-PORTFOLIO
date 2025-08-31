// src/components/Resume/Certifications.jsx
const Certifications = () => {
  const certifications = [
    {
      name: "Cybersecurity",
      issuer: "IBM SkillsBuild",
      year: "2024"
    },
    {
      name: "Data Science and Analytics",
      issuer: "HP Life Foundation",
      year: "2024"
    },
    {
      name: "Agile Project Management",
      issuer: "HP Life",
      year: "2024"
    },
    {
      name: "Artificial Intelligence",
      issuer: "ALX Africa",
      year: "2024"
    },
    {
      name: "Software Engineering",
      issuer: "Power Learn Project Academy",
      year: "2025"
    },
    {
      name: "Security Analyst Certification",
      issuer: "Cybershujaa",
      year: "2025"
    },
    {
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Coursera",
      year: "2025"
    },
    {
      name: "Junior Cybersecurity Analyst",
      issuer: "Cisco",
      year: "Ongoing"
    }
  ];

  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500 pb-2">
        Certifications
      </h3>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0 last:pb-0">
              <div className="flex items-start">
                <div className="bg-cyan-900/40 p-2 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{cert.name}</h4>
                  <p className="text-gray-300">{cert.issuer}</p>
                  <p className="text-sm mt-1">
                    <span
                      className={`px-2 py-1 rounded-full ${
                        cert.year === "Ongoing"
                          ? "bg-yellow-900/40 text-yellow-400"
                          : "bg-green-900/40 text-green-400"
                      }`}
                    >
                      {cert.year === "Ongoing" ? "In Progress" : cert.year}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;