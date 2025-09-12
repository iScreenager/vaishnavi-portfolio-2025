import { Download, Heart, Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import img from "../assets/img.png";
import Vaishnavi_rastogi_Resume from "../../public/Vaishnavi_rastogi_Resume.pdf";
import { useState, useEffect, useMemo } from "react";

export const DashBoard = () => {
  const [downloaded, setDownloaded] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = useMemo(() => [
    "Frontend Developer",
    "Full Stack Developer", 
    "React.js Developer"
  ], []);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentTitleIndex, isDeleting, titles]);

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
        className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-center pt-24 sm:pt-0 px-4 sm:px-6 lg:px-8 relative"
      >

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 xl:gap-32 items-center w-full max-w-7xl mx-auto">
        <div className="flex justify-center lg:justify-start order-1 lg:order-1">
          <div className="relative group">
            <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 animate-spin" style={{animationDuration: '8s'}}></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-rose-500/15 animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}}></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
            </div>

            <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-indigo-500/30 blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 dark:border-gray-600/30 backdrop-blur-sm group-hover:border-white/50 dark:group-hover:border-gray-500/50 transition-all duration-500">
                <img
                  src={img}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  alt="Vaishnavi Rastogi"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-20">
              <div className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-3 shadow-xl backdrop-blur-md border border-white/20 animate-bounce hover:scale-110 transition-transform duration-1000 cursor-pointer">
                <Heart className="h-3 w-3 sm:h-5 sm:w-5 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold">1.2k</span>
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-pink-500/20 to-rose-500/20 blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 z-20">
              <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-3 shadow-xl backdrop-blur-md border border-white/20 animate-bounce delay-500 hover:scale-110 transition-transform duration-1000 cursor-pointer">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center relative overflow-hidden">
                  <span className="text-xs sm:text-sm font-bold relative z-10">JS</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold">React Dev</p>
                  <p className="text-xs opacity-90">2+ years</p>
                </div>
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-sm opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-8 sm:-left-12 z-15 hidden sm:block">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <div className="absolute top-1/4 -right-6 sm:-right-8 z-15 hidden sm:block">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-75 delay-1000"></div>
            </div>
            <div className="absolute bottom-1/4 -right-4 sm:-right-6 z-15 hidden sm:block">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-75 delay-2000"></div>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left order-2 lg:order-2 w-full lg:w-auto">
          <div className="">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-handwritten">
              Hello, I'm
            </p>
            <h1 className="font-handwritten text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-tight pb-8">
              Vaishnavi Rastogi
            </h1>
          </div>

           <div className="mb-4 sm:mb-6 -mt-6">
               <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center lg:justify-start">
                 <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-medium ">
                   {displayText}
                 </span>
                 <span className="animate-pulse text-pink-500 ml-1">|</span>
               </h2>
           </div>

          <div className="relative max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-emerald-500/10 to-indigo-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
              
              <div className="relative z-10 space-y-6">
    
                
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a <span className="font-bold text-gray-900 dark:text-white bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-2 py-1 rounded-lg">Software Developer</span> with 2 years of experience at <span className="font-bold text-pink-600 dark:text-pink-400 bg-pink-500/10 px-2 py-1 rounded-lg">First American India</span>. I worked on migrating legacy systems to React and managed to improve performance by <span className="font-bold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-1 rounded-lg">80%</span> while handling <span className="font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-lg">100K+ records</span> efficiently.
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I enjoy building modern web applications with <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg">AI integration</span> and full-stack development using <span className="font-bold text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2 py-1 rounded-lg">Node.js and Next.js</span>. I focus on writing clean, maintainable code that actually works well.
                </p>

              </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4 px-4 sm:px-0">
            <button
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              onClick={handleDownload}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <a
                className="relative flex items-center justify-center gap-2 sm:gap-3"
                href={Vaishnavi_rastogi_Resume}
                download="Vaishnavi_Rastogi_Resume"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">
                  {downloaded ? "Downloaded!" : "Download Resume"}
                </span>
              </a>
            </button>

            <button 
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 dark:bg-gray-800/50 text-gray-800 dark:text-white rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 backdrop-blur-md"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  const navbar = document.querySelector('header');
                  const navbarHeight = navbar ? navbar.offsetHeight : 80;
                  const elementPosition = element.offsetTop;
                  const offsetPosition = elementPosition - navbarHeight;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm sm:text-base">View Projects</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg sm:text-xl">
                  →
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="fixed top-1/2 right-4 sm:right-6 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3 xl:gap-4">
        {socials.map((social, ind) => (
          <a
            key={ind}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 xl:p-4 bg-white/10 dark:bg-gray-800/50 rounded-xl xl:rounded-2xl backdrop-blur-md border border-white/20 dark:border-gray-700/50 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <social.icon
              size={20}
              className="xl:w-6 xl:h-6 text-gray-700 dark:text-gray-200 group-hover:text-white transition-colors duration-300"
            />
            <div className="absolute -left-20 xl:-left-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs xl:text-sm px-2 xl:px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {social.href.includes("mailto")
                ? "Email"
                : social.href.includes("linkedin")
                ? "LinkedIn"
                : social.href.includes("github")
                ? "GitHub"
                : "Instagram"}
            </div>
          </a>
        ))}
      </div>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-800/60 to-transparent rounded-2xl blur-sm"></div>
        
        <div className="relative flex items-center gap-3 bg-white/5 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/10 dark:border-gray-700/30 shadow-2xl">
          {socials.map((social, ind) => (
            <a
              key={ind}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 dark:bg-gray-800/50 rounded-xl backdrop-blur-md border border-white/20 dark:border-gray-700/50 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <social.icon
                size={18}
                className="text-gray-700 dark:text-gray-200 hover:text-white transition-colors duration-300"
              />
            </a>
          ))}
          
          <a
            href={Vaishnavi_rastogi_Resume}
            download="Vaishnavi_Rastogi_Resume.pdf"
            onClick={handleDownload}
            className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl backdrop-blur-md border border-emerald-400/50 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <Download
              size={18}
              className="text-white transition-colors duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
