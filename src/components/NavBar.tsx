import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import { Menu, Moon, Sun, X, Zap } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState<string>("about");
  const [onHover, setOnHover] = useState<string | null>(null);
  const { theme, toogleTheme } = useContext<ThemeContextType>(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const sections = ["about", "skills", "experience", "projects", "contact"];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="w-full">
        <div className="relative flex items-center justify-between py-4 px-4 sm:px-6 lg:px-10">
          <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/20 shadow-2xl" />
          
          <div className="relative z-10 flex items-center gap-2 sm:gap-4">
            <span className="font-handwritten font-bold text-2xl lg:text-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent pb-1">
              Vaishnavi
            </span>
            
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-xs font-bold shadow-lg shadow-emerald-500/25 animate-pulse">
              <Zap className="w-3 h-3" />
              <span>Immediate Joiner</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1 relative z-10">
            <nav className="flex items-center space-x-1">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(section);
                    scrollToSection(section);
                  }}
                  onMouseEnter={() => setOnHover(section)}
                  onMouseLeave={() => setOnHover(null)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeTab === section
                      ? "text-white bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/25"
                      : "text-gray-700 dark:text-gray-300 hover:text-white hover:bg-white/10 dark:hover:bg-gray-800/50"
                  }`}>
                  <span className="relative z-10 capitalize tracking-wide">
                    {section}
                  </span>
                  {onHover === section && activeTab !== section && (
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl transition-all duration-300" />
                  )}
                </a>
              ))}
            </nav>

            <div className="ml-4 pl-4 border-l border-white/20 dark:border-gray-700/50">
              <button
                onClick={toogleTheme}
                className="relative p-2 rounded-xl bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group">
                <div className="relative">
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-blue-400 group-hover:-rotate-12 transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>

          <div className="flex lg:hidden items-center space-x-2 relative z-10">
            <button
              onClick={toogleTheme}
              className="p-2 rounded-xl bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300">
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-400" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-pink-500" />
              ) : (
                <Menu className="w-6 h-6 text-pink-500" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="absolute top-full left-0 right-0 mt-0 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/20 shadow-2xl overflow-hidden">
              <nav className="px-6 py-4 space-y-2">
                {sections.map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(section);
                      setIsMenuOpen(false);
                      scrollToSection(section);
                    }}
                    className={`block px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      activeTab === section
                        ? "text-white bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg"
                        : "text-gray-700 dark:text-gray-300 hover:text-white hover:bg-white/10 dark:hover:bg-gray-800/50"
                    }`}>
                    <span className="capitalize tracking-wide">
                      {section}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
