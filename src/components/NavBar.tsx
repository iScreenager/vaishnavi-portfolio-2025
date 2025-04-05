import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import { Menu, Moon, Sun, X } from "lucide-react";

import { useContext, useEffect, useState } from "react";

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState<string>("about");
  const [onHover, setOnHover] = useState<string | null>(null);
  const { theme, toogleTheme } = useContext<ThemeContextType>(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const seactions = ["about", "skills", "experience", "project", "contact"];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header className="py-5 px-6 md:px-14 flex items-center justify-between bg-pink-50 dark:bg-gray-700 transition-colors sticky top-0 z-[20] mx-auto">
      <span className="font-handwritten text-xl md:text-2xl text-pink-500 dark:text-pink-400">
        Portfolio
      </span>

      <div className="hidden md:flex gap-6 md:gap-14 items-center">
        <nav className="flex flex-row gap-4 md:gap-6">
          {seactions.map((section) => (
            <a
              key={section}
              onClick={() => setActiveTab(section)}
              onMouseEnter={() => setOnHover(section)}
              onMouseLeave={() => setOnHover(null)}
              className={`cursor-pointer relative text-sm lg:text-base font-medium transition-all duration-300  ${activeTab === section ? "text-pink-500" : "text-gray-800  dark:text-white"}`}>
              {section.toUpperCase()}
              {(activeTab === section || onHover === section) && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-pink-500 "></span>
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center" onClick={toogleTheme}>
          <button
            className={`border rounded-full p-3 bg-slate-400 ${theme === "dark" ? "bg-yellow-200" : "bg-slate-400"}`}>
            {theme === "dark" ? (
              <Sun className="text-black" />
            ) : (
              <Moon className="text-black" />
            )}
          </button>
        </div>
      </div>

      <div className="flex md:hidden items-center gap-3">
        <button
          className={`border rounded-full p-1 bg-slate-400 ${theme === "dark" ? "bg-yellow-200" : "bg-slate-400"}`}
          onClick={toogleTheme}>
          {theme === "dark" ? (
            <Sun size={18} className="text-black " />
          ) : (
            <Moon size={18} className="text-black" />
          )}
        </button>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="text-pink-500" />
          ) : (
            <Menu className="text-pink-500" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <>
          <nav className="absolute top-[68px] left-0 w-full bg-pink-100 dark:bg-gray-700 flex flex-col items-start text-center px-5 py-3 gap-4 md:hidden shadow-lg transition-all z-10 ">
            {seactions.map((section) => (
              <a
                key={section}
                onClick={() => setActiveTab(section)}
                onMouseEnter={() => setOnHover(section)}
                onMouseLeave={() => setOnHover(null)}
                className={`cursor-pointer relative text-sm lg:text-base font-medium transition-all duration-300  ${activeTab === section ? "text-pink-500" : "text-gray-800  dark:text-white"}`}>
                {section.toUpperCase()}
                {(activeTab === section || onHover === section) && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-pink-500 "></span>
                )}
              </a>
            ))}
          </nav>
        </>
      )}
    </header>
  );
};
