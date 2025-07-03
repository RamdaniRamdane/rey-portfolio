"use client";
import { useState, useEffect } from "react";
import Title from "../components/title/title";
import { FiGithub, FiExternalLink, FiStar, FiCode, FiLoader } from "react-icons/fi";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiPython, SiCss3, SiHtml5, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiVuedotjs, SiTailwindcss ,SiGnubash ,SiLua} from "react-icons/si";

// Map to convert GitHub languages to icons
const techIcons: Record<string, JSX.Element> = {
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  React: <SiReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  Python: <SiPython className="text-blue-300" />,
  CSS: <SiCss3 className="text-blue-400" />,
  HTML: <SiHtml5 className="text-orange-500" />,
  Node: <SiNodedotjs className="text-green-500" />,
  Express: <SiExpress className="text-gray-400" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  PostgreSQL: <SiPostgresql className="text-blue-600" />,
  Vue: <SiVuedotjs className="text-green-400" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  Bash: <SiGnubash className="text-white" />,
  Lua: <SiLua className="text-[#00007f]" />
};

// Helper function to determine tech stack based on repo data
const determineTechStack = (repo: Record<string, any>): string[] => {
  const techStack: string[] = [];
  const nameAndDesc = `${repo.name} ${repo.description || ""} ${repo.language}`.toLowerCase();
  console.log(nameAndDesc)
  if (nameAndDesc.includes("react")) techStack.push("React");
  if (nameAndDesc.includes("next")) techStack.push("Next.js");
  if (nameAndDesc.includes("vue")) techStack.push("Vue");
  if (nameAndDesc.includes("node ")) techStack.push("Node");
  if (nameAndDesc.includes("express")) techStack.push("Express");
  if (nameAndDesc.includes("mongo")) techStack.push("MongoDB");
  if (nameAndDesc.includes("postgres")) techStack.push("PostgreSQL");
  if (nameAndDesc.includes("tailwind")) techStack.push("Tailwind");
  if (nameAndDesc.includes("python")) techStack.push("Python");
  if (nameAndDesc.includes("shell")) techStack.push("Bash");
  if (nameAndDesc.includes("typescript")) techStack.push("TypeScript");
  if (nameAndDesc.includes("css")) techStack.push("CSS");
  if (nameAndDesc.includes("lua")) techStack.push("Lua");
  if (nameAndDesc.includes("javascript")) techStack.push("JavaScript");
  console.log(techStack)
  return Array.from(new Set(techStack)).slice(0, 4);
};

const ProjectsGrid = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/RamdaniRamdane/repos?sort=updated&per_page=11');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        data.map((project : any)=>{
          console.log(project.name)
          if(project.name == "veloria") project.homepage="https://veloria-wnns.onrender.com/"
        })
        data[data.length]={ name: "UniVibe", description: "Social Network made as accademic projet", language: "node express tailwind mongo next", html_url: "#", homepage: "https://uni-vibe.onrender.com/" }
        setProjects(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setProjects([
          { name: "Portfolio", description: "My personal portfolio website built with Next.js and Tailwind", language: "JavaScript", html_url: "#", homepage: "#" },
          { name: "Task Manager", description: "A full-stack task management application", language: "TypeScript", html_url: "#", homepage: "#" },
          { name: "Weather App", description: "Real-time weather app using modern APIs", language: "JavaScript", html_url: "#", homepage: "#" },
          { name: "E-commerce Platform", description: "Full-featured online store with payment processing", language: "JavaScript", html_url: "#", homepage: "#" },
          { name: "Chat Application", description: "Real-time messaging app built with WebSockets", language: "TypeScript", html_url: "#", homepage: "#" },
          { name: "Data Visualization", description: "Interactive charts and graphs for data analysis", language: "Python", html_url: "#", homepage: "#" }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <FiLoader className="w-12 h-12 text-accent-color animate-spin" />
        <p className="mt-4 text-gray-400">Loading projects...</p>
      </div>
    );
  }

  if (error && projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <p className="text-red-400 mb-2">Failed to load projects: {error}</p>
        <p className="text-gray-400">Please try again later or check out my GitHub directly.</p>
        <a 
          href="https://github.com/RamdaniRamdane" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 px-4 py-2 bg-bg-text hover:bg-[#2c3136] text-white rounded-lg flex items-center transition-colors"
        >
          <FiGithub className="mr-2" /> Visit GitHub Profile
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 md:px-0">
      {projects.map((project, index) => {
        const techStack = determineTechStack(project);
        
        return (
          <div 
            key={index} 
            className="group relative bg-article-bg rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-zinc-800 hover:border-accent-color flex flex-col h-full"
          >
            <div className="p-5 flex-1">
              <div className="flex justify-between items-start mb-4">
                <FiCode className="text-accent-color w-6 h-6" />
                {project.stargazers_count > 0 && (
                  <div className="flex items-center text-yellow-500 text-sm">
                    <FiStar className="mr-1" />
                    <span>{project.stargazers_count}</span>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-color transition-colors">
                {project.name}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description || "A cool project I've been working on. Check it out!"}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {techStack.map((tech, i) => (
                  <span key={i} className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-zinc-800 text-gray-300">
                    {techIcons[tech] || <FiCode className="text-gray-400" />}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex mt-auto border-t border-zinc-800 divide-x divide-zinc-800">
              <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-400 hover:text-white hover:bg-zinc-800 transition-colors text-sm font-medium">
                <FiGithub /> Code
              </a>
              
              {project.homepage && (
                <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-400 hover:text-white hover:bg-zinc-800 transition-colors text-sm font-medium">
                  <FiExternalLink /> Preview
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Projects() {
  return (
    <div className="container mx-auto max-w-6xl py-12">
      <Title text="My" textColored=" Projects" />
      <ProjectsGrid />
    </div>
  );
}

