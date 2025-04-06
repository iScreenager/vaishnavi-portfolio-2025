import { Download, Heart, Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import img from "../assets/img.png";
import Vaishnavi_rastogi_Resume from "../../public/Vaishnavi_rastogi_Resume.pdf";

import { useState } from "react";

export const DashBoard = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const socials = [
    { icon: Mail, href: "mailto:rastogivaishnavi68@gmail.com" },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/vaishnavi-rastogi-104501194",
    },
    { icon: FaGithub, href: "https://github.com/iScreenager" },

    {
      icon: FaInstagram,
      href: "https://www.instagram.com/rastogivaishnavi09/",
    },
  ];
  return (
    <section
      id="about"
      className="relative bg-pink-50 dark:bg-gray-700 py-10 lg:py-20 px-6 md:px-16 lg:px-48 flex flex-col md:flex-row gap-10 md:gap-20 items-center lg:items-start">
      <div className="flex-shrink-0 relative mb-3">
        <div>
          <img
            src={img}
            className="w-52 h-52 md:w-80 md:h-80 rounded-full object-cover"
            alt="Vaishnavi"
          />
        </div>
        <div className="flex items-center gap-2 bg-rose-200 rounded-xl px-3 py-2 shadow-md absolute top-0 right-[-50px] md:right-[-40px] -translate-y-1/3 translate-x-1/3 motion-safe:animate-float ">
          <Heart className="h-5 w-5 text-red-500 " />
          <span className="text-sm font-medium">1.2k</span>
        </div>

        <div className="flex items-center gap-2 bg-rose-200 rounded-xl px-2 py-1 md:px-3 md:p-2 shadow-md absolute -left-12  motion-safe:animate-float">
          <p className="rounded-full p-1 md:p-2 font-medium md:font-bold text-teal-950 bg-teal-100 text-sm ">
            JS
          </p>
          <div>
            <p className="text-[11px] md:text-sm font-sans">React Dev</p>
            <p className="text-[9px] md:text-[11px] mx-1">2 years</p>
          </div>
        </div>
      </div>

      <div className="text-center md:text-left">
        <h4 className="font-handwritten text-4xl md:text-6xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text dark:from-pink-400 dark:to-purple-400 pb-5">
          Vaishnavi Rastogi
        </h4>
        <p className="text-xl text-pink-400 relative inline-block mb-4 md:font-extrabold  ">
          Frontend Developer
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-slate-300 dark:bg-slate-100"></span>
        </p>
        <p className="md:text-lg text-black dark:text-white  max-w-2xl mx-auto text-center md:text-start px-4 md:px-0">
          I create beautiful, responsive, and user-friendly web experiences with
          a focus on clean code and thoughtful design.
        </p>

        <div className=" flex flex-col sm:flex-row justify-center md:justify-start  gap-4 mt-5">
          <button
            className=" px-4 py-2 border border-pink-300 bg-pink-300 shadow-md hover:bg-pink-400 transition-all font-bold "
            onClick={handleDownload}>
            <a
              className="flex gap-2 items-center justify-center"
              href={Vaishnavi_rastogi_Resume}
              download="Vaihsnavi_Rastogi_Resume">
              <Download size={18} />
              {downloaded ? "Downloaded" : "Download Resume"}
            </a>
          </button>

          <button className="bg-purple-400  text-black  hover:bg-purple-500 py-2 px-4 transition-all font-bold ">
            View Project
          </button>
        </div>
      </div>
      <div className="fixed top-[35%] right-4 z-50 hidden sm:flex flex-col gap-4 items-center">
        {socials.map((social, ind) => (
          <a
            key={ind}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all p-3 rounded-full hover:bg-pink-400 dark:hover:bg-pink-500">
            <social.icon
              size={22}
              className="text-gray-700 dark:text-gray-200 group-hover:text-white transition-colors"
            />
          </a>
        ))}
      </div>
    </section>
  );
};
