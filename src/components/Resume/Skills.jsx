// src/components/Resume/Skills.jsx
const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: ["HTML5", "CSS3/SCSS", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Angular"],
      icon: "💻"
    },
    {
      category: "Backend Development",
      items: ["Node.js/Express", "Python/FastAPI", "Java/Spring Boot", "REST APIs", "MongoDB", "PostgreSQL", "Prisma ORM"],
      icon: "🔙"
    },
    {
      category: "Security Tools & Analysis",
      items: ["Wireshark", "Burp Suite", "Nmap", "Nessus", "Metasploit", "OSINT Tools", "Splunk", "SIEM"],
      icon: "🔒"
    },
    {
      category: "Tooling & Version Control",
      items: ["Git/GitHub", "Webpack", "Babel", "ESLint", "Prettier"],
      icon: "🛠️"
    },
    {
      category: "Performance & SEO",
      items: ["Code splitting", "Lazy loading", "Semantic markup", "Meta tags"],
      icon: "⚡"
    },
    {
      category: "Soft Skills",
      items: ["Problem solving", "Critical thinking", "Attention to detail", "Communication", "Teamwork", "Adaptability", "Ethical judgment"],
      icon: "🌟"
    }
  ];

  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500 pb-2">
        Technical Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-cyan-500"
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">{skill.icon}</span>
              <h4 className="text-xl font-bold text-white">{skill.category}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="bg-cyan-900/40 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;