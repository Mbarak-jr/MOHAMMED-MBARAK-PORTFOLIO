// src/components/Projects/ProjectsGrid.jsx
import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
  const projects = [
    {
      title: "NovaHealth – Healthcare Information Platform",
      description: "A modern healthcare portal with secure patient dashboards, JWT authentication, and responsive UI built on the MERN stack.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/Mbarak-jr/NOVAHEALTH",
      demo: "https://novahealth.onrender.com"
    },
    {
      title: "ChamaPulse – Group Finance Tracker",
      description: "A platform for managing chama (group savings) with member contributions, expense tracking, and financial analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Mbarak-jr/CHAMAPULSE",
      demo: "https://chamapulse.onrender.com/"
    },
    {
      title: "WeatherWhiz – Real-time Weather App",
      description: "Frontend React app fetching live weather data via OpenWeather API with geolocation, unit toggling, and a clean modern design.",
      technologies: ["React", "OpenWeather API", "Vercel"],
      github: "https://github.com/Mbarak-jr/WeatherWhiz",
      demo: "https://weather-whiz-mu.vercel.app/"
    },
    {
      title: "Travel AI Assistant",
      description: "AI-powered travel planner built with FastAPI backend and Next.js frontend. Helps users with travel documentation and planning.",
      technologies: ["FastAPI", "Next.js", "AI APIs"],
      github: "https://github.com/Mbarak-jr/TRAVEL-AI-ASSISTANT",
      demo: "https://travel-ai-assistant-tau.vercel.app/"
    },
    {
      title: "SmartBiz Tracker",
      description: "Business analytics tool for tracking income, expenses, and growth trends with intuitive dashboards and visualization.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Mbarak-jr/VIBE-BUSINESS-TRACKER",
      demo: "https://smartbiz-tracker.onrender.com/"
    },
    {
      title: "Global Lift Hub",
      description: "A full-stack platform connecting underserved communities to jobs, microloans, digital skills, and sustainable commerce.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Mbarak-jr/GLOBAL-LIFT-HUB",
      demo: "https://globallifthub.onrender.com"
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