// src/components/Resume/Experience.jsx
const Experience = () => {
    const experiences = [
      {
        title: "Full Stack Developer",
        company: "E&M Technology House",
        period: "Jan 2024 – Mar 2025",
        responsibilities: [
          "Built and maintained responsive web interfaces using React, SCSS modules, and TypeScript",
          "Created reusable UI components and implemented state management with hooks and context",
          "Automated builds and deployments using GitHub Actions on Ubuntu servers with Bash and Docker",
          "Improved Lighthouse scores through performance optimizations like code splitting and caching",
          "Followed accessibility and SEO best practices to ensure wide usability and discoverability",
          "Contributed to Vanilla Framework and internal component libraries"
        ]
      },
      {
        title: "Open Source Contributor",
        company: "Vanilla Framework & Personal Projects",
        period: "2022 – Present",
        responsibilities: [
          "Contributed new components and improved SCSS docs for Vanilla Framework",
          "Assisted in CSS architecture reviews for open source projects",
          "Maintained a library of accessible React + TypeScript UI widgets (dropdowns, modals)",
          "Achieved 1.2K+ downloads for personal UI component library"
        ]
      }
    ];
  
    return (
      <div className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Professional Experience</h3>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <h4 className="text-2xl font-bold text-gray-800">{exp.title}</h4>
                <span className="text-blue-600 font-medium">{exp.period}</span>
              </div>
              <p className="text-gray-600 font-medium mt-1">{exp.company}</p>
              <ul className="mt-4 space-y-3">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
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