import {
  FaGithub,
  FaPaperclip,
  FaRegComment,
  FaRegHeart,
} from "react-icons/fa";
import { useState } from "react";

type ProjectType = {
  name: string;
  logo: string;
  img: string;
  overlayText: string;
  url: string;
  github: string;
  likes: number;
  caption: string;
  tags: string;
  techStack: string[];
};

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 rounded-[24px] overflow-hidden border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 w-full max-w-[450px] mx-auto
     "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="rounded-full w-10 h-10 bg-slate-900 dark:bg-white flex items-center justify-center p-[2px]">
            <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center font-bold text-sm text-red-300 font-handwritten">
              {project.logo}
            </div>
          </div>
          <div className="ml-3">
            <p className="text-base font-semibold font-handwritten text-black dark:text-gray-300">
              {project.name}
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center items-center overflow-hidden bg-white h-80 cursor-pointer">
        <img
          src={project.img}
          alt={`${project.name} Project`}
          className={`max-w-full h-fit object-contain transition-transform duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/60 via-black/40 to-transparent text-white p-4 flex items-end transition-all duration-500 ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}>
          <div className="text-sm font-bubbly font-semibold">
            <p>{project.overlayText}</p>
            <div className="flex gap-3 mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition rounded-full p-2 bg-white text-black hover:bg-black hover:text-white">
                <FaGithub className="text-sm" />
              </a>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition rounded-full p-2 bg-white text-black hover:bg-black hover:text-white">
                <FaPaperclip className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4 pb-3">
        <div className="flex items-center justify-between text-xl text-gray-700 dark:text-gray-300">
          <div className="flex items-center space-x-4">
            <FaRegHeart className="cursor-pointer hover:text-pink-400 transition" />
            <FaRegComment className="cursor-pointer hover:text-pink-400 transition" />
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition">
              <FaGithub />
            </a>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition">
              <FaPaperclip />
            </a>
          </div>
        </div>

        <p className="mt-3 text-sm font-semibold text-gray-800 dark:text-gray-200 font-sans">
          {project.likes} likes
        </p>

        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 font-bubbly">
          <strong className="font-extrabold font-sans">VaishnaviRastogi</strong>
          {project.caption}
          <br />
          {project.tags}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-black dark:text-white font-medium mb-3">
          {project.techStack.map((stack) => (
            <span
              key={stack}
              className="dark:bg-pink-400 bg-pink-200 px-2 py-1 rounded-full">
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
