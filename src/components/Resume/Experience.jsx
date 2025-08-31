// src/components/Resume/Experience.jsx
const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer & Security Analyst",
      company: "E&M Technology House",
      period: "Jan 2024 – Mar 2025",
      responsibilities: [
        "Developed responsive React interfaces with reusable components and SCSS modules",
        "Implemented state management using hooks and context API",
        "Automated deployments using GitHub Actions, Docker, and Bash on Ubuntu servers",
        "Optimized performance with code splitting, caching, and semantic markup",
        "Enhanced SEO and mobile responsiveness across multiple projects",
        "Conducted vulnerability assessments with Nmap and Nessus, documenting and flagging risks",
        "Monitored network traffic using Wireshark and Splunk to detect anomalies and security incidents",
        "Performed penetration testing and flagged potential threats in internal applications",
        "Assisted in incident response workflows, escalating critical alerts to senior engineers",
        "Applied NIST and CIS frameworks to improve compliance and security posture",
        "Collaborated with developers to integrate security best practices into the SDLC",
        "Prepared technical reports highlighting risks, attack surfaces, and recommended mitigations"
      ]
    }
  ];

  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500 pb-2">
        Professional Experience
      </h3>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-500"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
              <h4 className="text-2xl font-bold text-white">{exp.title}</h4>
              <span className="text-cyan-400 font-medium">{exp.period}</span>
            </div>
            <p className="text-gray-300 font-medium mt-1">{exp.company}</p>
            <ul className="mt-4 space-y-3">
              {exp.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-cyan-400 mr-2 mt-1">•</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;