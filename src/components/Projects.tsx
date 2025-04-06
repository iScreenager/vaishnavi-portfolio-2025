import { ProjectCard } from "./ProjectCard";
import TaskBuddy from "../assets/TaskBuddy.png";
import InterviewAI from "../assets/InterviewAI.png";

export const Projects = () => {
  const Projects = [
    {
      name: "Task Buddy",
      logo: "TB",
      img: TaskBuddy,
      overlayText:
        " TaskBuddy is a task management app designe to help users efficiently organize, track, and manage daily to-dos with features like authentication, drag-and-drop, filters, and a clean, responsive UI.",
      url: "https://taskbuddy-chi.vercel.app/",
      github: "https://github.com/iScreenager/taskbuddy",
      likes: 124,
      caption:
        " TaskBuddy — because sticky notes were getting out of hand 📝💥",
      tags: " #TaskBuddy #TodoApp #OrganizeLikeAPro",
      techStack: ["React.js", "TypeScript", "Context API", "Firebase"],
    },
    {
      name: "InterviewAI",
      logo: "AI",
      img: InterviewAI,
      overlayText:
        " InterviewAI is an AI-powered platform that generates personalized mock interview questions from resumes. It analyzes user responses and provides smart feedback to help improve performance.",
      url: "https://interview-ai-weld.vercel.app/",
      github: "https://github.com/iScreenager/interviewai",
      likes: 287,
      caption:
        " InterviewAI — your personal AI coach for mock interviews 🤖🎤 Practice. Improve. Succeed! 💼✨",
      tags: " #MockInterview #AIprep #InterviewAI",
      techStack: ["React.js", "Firebase", "Gemini AI", "TypeScript"],
    },
  ];
  return (
    <section
      id="project"
      className="bg-pink-50 dark:bg-gray-700 flex flex-col items-center gap-14 px-4 md:px-8 py-6">
      <h4 className="text-4xl font-handwritten text-center text-pink-400">
        Projects
      </h4>
      <div className="flex gap-10 flex-wrap">
        {Projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};
