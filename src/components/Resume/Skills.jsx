// src/components/Resume/Skills.jsx
const Skills = () => {
    const skills = [
      { 
        category: "Frontend Development", 
        items: ["HTML5", "CSS3/SCSS", "JavaScript (ES6+)", "TypeScript", "React (Hooks, Context)", "Next.js", "Angular"],
        icon: "💻"
      },
      { 
        category: "Responsive & Accessibility", 
        items: ["Mobile-first design", "Cross-browser testing", "ARIA roles", "WCAG compliance"],
        icon: "📱"
      },
      { 
        category: "Tooling & Version Control", 
        items: ["Git/GitHub", "Webpack", "Babel", "ESLint", "Prettier"],
        icon: "🛠️"
      },
      { 
        category: "Performance & SEO", 
        items: ["Code-splitting", "Lazy loading", "Lighthouse audits", "Semantic markup", "Meta tags"],
        icon: "⚡"
      },
      { 
        category: "Linux & DevOps", 
        items: ["Ubuntu desktop & server", "Bash scripting", "Docker", "CI/CD with GitHub Actions", "Vercel/Render"],
        icon: "🐧"
      },
      { 
        category: "Backend Development", 
        items: ["Node.js/Express", "Python/FastAPI", "RESTful APIs", "MongoDB", "PostgreSQL", "Prisma ORM"],
        icon: "🔙"
      }
    ];
  
    return (
      <div className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{skill.icon}</span>
                <h4 className="text-xl font-bold text-gray-800">{skill.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
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