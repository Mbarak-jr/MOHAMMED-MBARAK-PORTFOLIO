// src/components/Resume/Certifications.jsx
const Certifications = () => {
    const certifications = [
      {
        name: "Security Analyst (Ongoing)",
        issuer: "Cybershujaa",
        year: "2024"
      },
      {
        name: "Google Cybersecurity Professional Certificate (Ongoing)",
        issuer: "Coursera",
        year: "2024"
      },
      {
        name: "MERN Stack Software Engineer",
        issuer: "Power Learn Project (PLP) Academy",
        year: "2023"
      },
      {
        name: "Agile Project Management",
        issuer: "HP Life",
        year: "2023"
      },
      {
        name: "Data Science and Analytics",
        issuer: "HP Life",
        year: "2023"
      },
      {
        name: "Cybersecurity",
        issuer: "IBM SkillsBuild",
        year: "2024"
      },
      {
        name: "Data Analytics",
        issuer: "Google Career Certificate",
        year: "2024"
      },
      {
        name: "Artificial Intelligence",
        issuer: "ALX Africa",
        year: "2024"
      },
      {
        name: "Programming in Python",
        issuer: "LinkedIn Learning",
        year: "2024"
      },
    ];
  
    return (
      <div className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Certifications</h3>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{cert.name}</h4>
                    <p className="text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className={`px-2 py-1 rounded-full ${cert.name.includes('Ongoing') ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                        {cert.name.includes('Ongoing') ? 'In Progress' : cert.year}
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