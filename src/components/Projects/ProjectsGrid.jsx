import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
  const projects = [
    {
      title: "VIBE Business Tracker",
      description: "A JavaScript application for tracking business metrics and performance indicators with visualization capabilities.",
      technologies: ["JavaScript"],
      github: "https://github.com/Mbarak-jr/VIBE-BUSINESS-TRACKER",
      demo: null
    },
    {
      title: "Travel AI Assistant",
      description: "FastAPI backend + Next.js frontend for a Travel Document AI Assistant that helps with travel planning and documentation.",
      technologies: ["FastAPI", "Next.js", "JavaScript"],
      github: "https://github.com/Mbarak-jr/TRAVEL-AI-ASSISTANT",
      demo: null
    },
    {
      title: "COVID-19 Data Tracker",
      description: "A Python project for tracking and visualizing COVID-19 data globally, including metrics like total cases, deaths, and vaccination rates over time.",
      technologies: ["Python", "Jupyter Notebook", "Data Visualization"],
      github: "https://github.com/Mbarak-jr/COVID19-DATA-TRACKER",
      demo: null
    },
    {
      title: "Portfolio Website Recreation",
      description: "Recreated a portfolio website using HTML, CSS, and Bootstrap for a web development assignment.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/Mbarak-jr/PORTFOLIO-WEBSITE-RECREATION",
      demo: null
    },
    {
      title: "Iris Data Analysis",
      description: "Exploratory Data Analysis and Visualization using the Iris dataset in Python (pandas, matplotlib, seaborn).",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/Mbarak-jr/IRIS_DATA_ANALYSIS",
      demo: null
    },
    {
      title: "E-Commerce Database Design",
      description: "Database design and implementation for an e-commerce platform with product catalog, user management, and order processing.",
      technologies: ["Database Design", "SQL"],
      github: "https://github.com/Mbarak-jr/ECOMMERCE-DATABASE-DESIGN",
      demo: null
    },
    {
      title: "Global Lift Hub",
      description: "A full-stack platform designed to connect underserved communities with life-changing opportunities in jobs, microloans, digital skills, and sustainable commerce.",
      technologies: ["React", "Node.js", "MongoDB", "Full-stack"],
      github: "https://github.com/Mbarak-jr/GLOBAL-LIFT-HUB",
      demo: null
    },
    {
      title: "E-Commerce Website",
      description: "An e-commerce website built with HTML and CSS demonstrating product listings and basic functionality.",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/Mbarak-jr/ECOMMERCE-WEBSITE",
      demo: null
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;