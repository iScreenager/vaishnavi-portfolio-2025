import TaskBuddy from "../assets/TaskBuddy.png";
import InterviewAI from "../assets/InterviewAI.png";
import VideoEditor from "../assets/VideoEditor.png";
import GredyTodo from "../assets/GreedyTodo.png";
import { useState } from "react";
import {
  FaGithub,
  FaCode,
  FaRocket,
  FaBrain,
  FaCog,
  FaBolt,
  FaGlobe,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaStar,
  FaExternalLinkAlt,
  FaLaptop,
  FaServer,
  FaRobot,
} from "react-icons/fa";

type IconType = typeof FaCode;

interface Project {
  id: number;
  name: string;
  img: string;
  description: string;
  url: string;
  github: string;
  techStack: string[];
  category: string;
  year: string;
  color: string;
  icon: IconType;
}

interface Category {
  id: string;
  label: string;
  icon: IconType;
}

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      name: "GreedyTodo",
      img: GredyTodo,
      description:
        "Full-stack task management platform with custom REST APIs, JWT authentication, real-time WebSocket updates, PWA push notifications, and Docker containerization.",
      url: "https://greedy-todo-frontend.vercel.app/",
      github: "https://github.com/iScreenager/greedy-todo-frontend",
      techStack: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Socket.io",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "AWS",
        "PWA",
        "Docker",
      ],
      category: "fullstack",
      year: "2025",
      color: "from-orange-500 to-red-500",
      icon: FaRocket,
    },
    {
      id: 2,
      name: "InterviewAI",
      img: InterviewAI,
      description:
        "An AI-powered platform that generates personalized mock interview questions from resumes. It analyzes user responses and provides intelligent feedback to help improve interview performance and confidence.",
      url: "https://interview-ai-weld.vercel.app/",
      github: "https://github.com/iScreenager/interviewai",
      techStack: [
        "React.js",
        "Firebase",
        "Gemini AI",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      category: "ai",
      year: "2025",
      color: "from-purple-500 to-pink-500",
      icon: FaBrain,
    },
    {
      id: 3,
      name: "Video Caption Editor",
      img: VideoEditor,
      description:
        "A powerful tool designed to simplify the process of editing, syncing, and managing video subtitles with real-time preview capabilities and intuitive controls for content creators.",
      url: "https://video-caption-editor-blush.vercel.app/",
      github: "https://github.com/iScreenager/video_caption_editor",
      techStack: ["React.js", "TypeScript", "Web API"],
      category: "frontend",
      year: "2025",
      color: "from-green-500 to-emerald-500",
      icon: FaCog,
    },
    {
      id: 4,
      name: "TaskBuddy",
      img: TaskBuddy,
      description:
        "A comprehensive task management application designed to help users efficiently organize, track, and manage daily to-dos with advanced features like authentication, drag-and-drop functionality, smart filters, and a clean, responsive UI.",
      url: "https://taskbuddy-chi.vercel.app/",
      github: "https://github.com/iScreenager/taskbuddy",
      techStack: ["React.js", "TypeScript", "Context API", "Firebase"],
      category: "fullstack",
      year: "2024",
      color: "from-blue-500 to-cyan-500",
      icon: FaRocket,
    },
  ];

  const categories: Category[] = [
    { id: "all", label: "All Projects", icon: FaCode },
    { id: "frontend", label: "Frontend", icon: FaLaptop },
    { id: "fullstack", label: "Fullstack", icon: FaServer },
    { id: "ai", label: "AI Projects", icon: FaRobot },
  ];

  const techIcons: { [key: string]: IconType } = {
    "React.js": FaCode,
    TypeScript: FaBolt,
    "Context API": FaCog,
    Firebase: FaCloud,
    "Gemini AI": FaBrain,
    "Web API": FaGlobe,
    JavaScript: FaBolt,
    "Node.js": FaDatabase,
    MongoDB: FaDatabase,
    "Express.js": FaCog,
    "Next.js": FaRocket,
    "Tailwind CSS": FaCode,
    "Material UI": FaCode,
    Redux: FaCog,
    Jest: FaShieldAlt,
    Git: FaCode,
    Vercel: FaCloud,
    Figma: FaCode,
    Postman: FaGlobe,
    HTML5: FaCode,
    CSS3: FaCode,
    "Socket.io": FaGlobe,
    AWS: FaCloud,
    PWA: FaRocket,
    Docker: FaServer,
    "shadcn/ui": FaCode,
  };

  const techColors: { [key: string]: string } = {
    "React.js": "#61DAFB",
    TypeScript: "#3178C6",
    "Context API": "#764ABC",
    Firebase: "#FFCA28",
    "Gemini AI": "#8B5CF6",
    "Web API": "#10B981",
    JavaScript: "#F7DF1E",
    "Node.js": "#339933",
    MongoDB: "#47A248",
    "Express.js": "#000000",
    "Next.js": "#000000",
    "Tailwind CSS": "#06B6D4",
    "Material UI": "#0081CB",
    Redux: "#764ABC",
    Jest: "#C21325",
    Git: "#181717",
    Vercel: "#000000",
    Figma: "#F24E1E",
    Postman: "#FF6C37",
    HTML5: "#E34F26",
    CSS3: "#1572B6",
    "Socket.io": "#010101",
    AWS: "#FF9900",
    PWA: "#5A0FC8",
    Docker: "#2496ED",
    "shadcn/ui": "#000000",
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const getProjectCount = (categoryId: string): number => {
    if (categoryId === "all") return projects.length;
    return projects.filter((p) => p.category === categoryId).length;
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold font-handwritten bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent pb-4">
            My Creative Works
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Here's what I've been building lately - from{" "}
            <span className="text-pink-500 font-semibold">React apps</span> that
            actually work, to{" "}
            <span className="text-purple-500 font-semibold">AI tools</span> that
            solve real problems, and
            <span className="text-indigo-500 font-semibold">
              {" "}
              web experiences
            </span>{" "}
            that people actually want to use.
          </p>
        </div>
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              const projectCount = getProjectCount(category.id);

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                      : "bg-white/10 dark:bg-gray-800/10 text-gray-600 dark:text-gray-300 border border-white/20 dark:border-gray-700/20 hover:bg-pink-500/10 dark:hover:bg-pink-500/10 hover:border-pink-500/30"
                  }`}>
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                    }`}>
                    {projectCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
            {filteredProjects.map((project, index) => {
              const isHovered = hoveredProject === index;

              return (
                <div
                  key={project.id}
                  className={`group relative bg-gradient-to-br from-white/20 via-pink-500/10 to-purple-500/10 dark:from-gray-800/20 dark:via-pink-500/10 dark:to-purple-500/10 backdrop-blur-lg border border-pink-500/30 dark:border-pink-500/20 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 ${
                    isHovered
                      ? "ring-4 ring-pink-400/30 shadow-pink-500/30"
                      : ""
                  } overflow-hidden w-full md:h-[260px] flex flex-col md:flex-row`}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}>
                  <div className="relative w-full md:w-48 h-48 md:h-full overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-t-none flex-shrink-0">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:brightness-110 group-hover:contrast-110 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="flex gap-1.5 md:gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-sm hover:from-gray-700 hover:to-gray-800 text-white rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 border border-gray-600/50 hover:border-gray-500 shadow-2xl hover:shadow-3xl">
                          <FaGithub className="text-xs" />
                          <span className="hidden sm:inline">Code</span>
                        </a>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 bg-gradient-to-r from-pink-500/80 to-purple-500/80 backdrop-blur-sm hover:from-pink-500 hover:to-purple-500 text-white rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 border border-pink-400/50 hover:border-pink-300 shadow-2xl hover:shadow-3xl">
                          <FaExternalLinkAlt className="text-xs" />
                          <span className="hidden sm:inline">Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-4 flex flex-col flex-1 min-h-0">
                    <div className="mb-1">
                      <h3 className="text-base md:text-lg font-bold text-gray-800 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors duration-300 mb-1">
                        {project.name}
                      </h3>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className=" min-h-0">
                      <div className="flex flex-wrap gap-2 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                        {project.techStack.map((tech, techIndex) => {
                          const Icon = techIcons[tech] || FaStar;
                          const color = techColors[tech] || "#6B7280";

                          return (
                            <div
                              key={techIndex}
                              className="group/tech flex items-center gap-1 bg-gradient-to-r from-white/10 to-transparent rounded-full px-2 py-1 border border-white/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105">
                              <Icon
                                className="w-3 h-3 group-hover/tech:scale-110 transition-transform duration-300"
                                style={{ color }}
                              />
                              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover/tech:text-white transition-colors duration-300">
                                {tech}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
