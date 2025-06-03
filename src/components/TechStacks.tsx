import React from "../assets/icons/React.svg";
import TypeScript from "../assets/icons/TypeScript.svg";
import Javascript from "../assets/icons/Javascript.svg";
import Redux from "../assets/icons/Redux.svg";
import HTML from "../assets/icons/HTML.svg";
import CSS from "../assets/icons/CSS.svg";
import TailwindCSS from "../assets/icons/TailwindCSS.svg";
import MaterialUI from "../assets/icons/MaterialUI.svg";
import Jest from "../assets/icons/Jest.svg";
import Git from "../assets/icons/Github.svg";
import Firebase from "../assets/icons/Firebase.svg";

export const TechStack = () => {
  const highlights = [
    {
      icon: React,
      label: "React.js",
    },
    {
      icon: TypeScript,
      label: "TypeScript",
    },
    {
      icon: Javascript,
      label: "JavaScript",
    },
    {
      icon: Redux,
      label: "Redux",
    },

    {
      icon: TailwindCSS,
      label: "Tailwind CSS",
    },
    {
      icon: MaterialUI,
      label: "MaterialUI",
    },
    {
      icon: CSS,
      label: "CSS",
    },
    {
      icon: HTML,
      label: "HTML",
    },

    {
      icon: Jest,
      label: "Jest",
    },

    {
      icon: Git,
      label: "Git & GitHub",
    },
    {
      icon: Firebase,
      label: "Firebase",
    },
  ];
  return (
    <section
      id="skills"
      className=" flex flex-col items-center gap-14 px-4 md:px-8 py-6">
      <h4 className="text-4xl font-handwritten text-center text-pink-400">
        Tech stack
      </h4>
      <div className="flex flex-wrap gap-6  lg:w-[70%]  justify-center ">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 ">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-[3px] md:p-[4px] cursor-pointer">
              <div className="w-full h-full rounded-full bg-slate-200 dark:bg-rose-50  flex items-center justify-center">
                <img src={highlight.icon} className="w-6 h-5 md:w-8 md:h-8" />
              </div>
            </div>
            <p className="text-xs sm:text-sm font-bold text-center text-black dark:text-white">
              {highlight.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
