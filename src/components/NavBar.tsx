import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState<string>("about");
  const [onHover, setOnHover] = useState<string | null>(null);
  const { theme, toogleTheme } = useContext<ThemeContextType>(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const sections = ["about", "skills", "experience", "project", "contact"];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header className="py-4 px-6 md:px-14 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm bg-pink-50/70 dark:bg-gray-700/70 shadow-md  transition-all">
      {/* Brand */}
      <span className="font-handwritten text-xl md:text-2xl text-pink-500 dark:text-pink-400">
        Portfolio
      </span>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 md:gap-14 items-center">
        <nav className="flex flex-row gap-4 md:gap-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setActiveTab(section)}
              onMouseEnter={() => setOnHover(section)}
              onMouseLeave={() => setOnHover(null)}
              className={`cursor-pointer relative text-sm lg:text-base font-medium tracking-wide transition-all duration-300 ${
                activeTab === section
                  ? "text-pink-500"
                  : "text-gray-700 dark:text-white"
              }`}>
              {section.toUpperCase()}
              {(activeTab === section || onHover === section) && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-pink-500" />
              )}
            </a>
          ))}
        </nav>

        {/* Theme Toggle */}
        <button
          className={`border rounded-full p-2 transition-colors ${
            theme === "dark" ? "bg-yellow-200" : "bg-slate-300"
          }`}
          onClick={toogleTheme}>
          {theme === "dark" ? (
            <Sun className="text-black" size={20} />
          ) : (
            <Moon className="text-black" size={20} />
          )}
        </button>
      </div>

      {/* Mobile Nav Toggle */}
      <div className="flex md:hidden items-center gap-2">
        <button
          className={`border rounded-full p-1 transition-colors ${
            theme === "dark" ? "bg-yellow-200" : "bg-slate-300"
          }`}
          onClick={toogleTheme}>
          {theme === "dark" ? (
            <Sun size={18} className="text-black" />
          ) : (
            <Moon size={18} className="text-black" />
          )}
        </button>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="text-pink-500" size={24} />
          ) : (
            <Menu className="text-pink-500" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-[68px] left-0 w-full backdrop-blur-lg bg-white/80 dark:bg-gray-900/70 border-t border-white/20 dark:border-gray-800/40 flex flex-col items-start px-5 py-4 gap-4 md:hidden shadow-lg transition-all z-40 rounded-b-xl">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => {
                setActiveTab(section);
                setIsMenuOpen(false);
              }}
              onMouseEnter={() => setOnHover(section)}
              onMouseLeave={() => setOnHover(null)}
              className={`cursor-pointer relative text-sm lg:text-base font-medium transition-all duration-300 ${
                activeTab === section
                  ? "text-pink-500"
                  : "text-gray-800 dark:text-white"
              }`}>
              {section.toUpperCase()}
              {(activeTab === section || onHover === section) && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-pink-500" />
              )}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
