import { ProjectCard } from "./ProjectCard";
import TaskBuddy from "../assets/TaskBuddy.png";
import InterviewAI from "../assets/InterviewAI.png";
import VideoEditor from "../assets/VideoEditor.png";

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
    {
      name: "Video Caption Editor",
      logo: "VCE",
      img: VideoEditor,
      overlayText:
        " Video Caption Editor is a tool designed to simplify the process of editing, syncing, and managing video subtitles with real-time preview.",
      url: "https://video-caption-editor-blush.vercel.app/",
      github: "https://github.com/iScreenager/video_caption_editor",
      likes: 98,
      caption: " Video Caption Editor — because timing is everything 🎬🕒",
      tags: " #CaptionEditor #Subtitles #VideoTools",
      techStack: ["React.js", "TypeScript", "Web API"],
    },
  ];
  return (
    <section
      id="project"
      className=" flex flex-col items-center gap-14 px-4 md:px-8 py-6">
      <h4 className="text-4xl font-handwritten text-center text-pink-400">
        Projects
      </h4>
      <div className="flex flex-wrap justify-between gap-2">
        {Projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};
