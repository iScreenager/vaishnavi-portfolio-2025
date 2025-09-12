import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiGraphql,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiJest,
  SiGithub,
  SiFigma,
  SiVercel,
  SiVite,
  SiWebpack,
  SiPostman,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export const Experience = () => {
  const experiences = [
    {
      company: "First American India",
      role: "Frontend Developer",
      date: "April 2023 - December 2024",
      duration: "1 year 8 months",
      type: "Full-time",
      location: "Remote",
      description:
        "US-based financial and real estate company developing performant solutions for title insurance and settlement services.",
      highlights: [
        "Led legacy system migration to React.js with TypeScript & Redux",
        "Built Manage Users page handling 100K+ records with 80% performance boost",
        "Developed reusable components & HOCs reducing development time",
        "Integrated REST APIs with error boundaries for robust UX",
        "Collaborated cross-functionally ensuring cross-browser compatibility",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Redux",
        "JavaScript",
        "REST APIs",
        "Performance Optimization",
      ],
    },
    {
      company: "My Digital Dudes Technology LLP",
      role: "Frontend Developer Intern",
      date: "January 2023 - April 2023",
      duration: "3 months",
      type: "Internship",
      location: "Remote",
      description:
        "Technology company focused on delivering modern web solutions and digital experiences.",
      highlights: [
        "Developed responsive web pages with React.js & modern JavaScript",
        "Implemented SEO best practices & performance optimization",
        "Built pixel-perfect layouts with DOM manipulation techniques",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "SEO",
        "DOM Manipulation",
      ],
    },
  ];

  const getTechIcon = (tech: string) => {
    const techIcons: {
      [key: string]: React.ComponentType<{
        className?: string;
        style?: React.CSSProperties;
      }>;
    } = {
      "React.js": SiReact,
      TypeScript: SiTypescript,
      JavaScript: SiJavascript,
      Redux: SiRedux,
      Tailwind: SiTailwindcss,
      "Material UI": SiReact,
      Firebase: SiFirebase,
      MongoDB: SiMongodb,
      GraphQL: SiGraphql,
      "Node.js": SiNodedotjs,
      "Express.js": SiExpress,
      "Next.js": SiNextdotjs,
      Jest: SiJest,
      Git: SiGithub,
      Figma: SiFigma,
      Vercel: SiVercel,
      Vite: SiVite,
      Webpack: SiWebpack,
      Postman: SiPostman,
      Java: SiReact,
      HTML5: SiHtml5,
      CSS3: SiCss3,
    };
    return techIcons[tech] || SiReact;
  };

  const getTechColor = (tech: string) => {
    const techColors: { [key: string]: string } = {
      "React.js": "#61DAFB",
      TypeScript: "#3178C6",
      JavaScript: "#F7DF1E",
      Redux: "#764ABC",
      Tailwind: "#06B6D4",
      "Material UI": "#0081CB",
      Firebase: "#FFCA28",
      MongoDB: "#47A248",
      GraphQL: "#E10098",
      "Node.js": "#339933",
      "Express.js": "#000000",
      "Next.js": "#000000",
      Jest: "#C21325",
      Git: "#181717",
      Figma: "#F24E1E",
      Vercel: "#000000",
      Vite: "#646CFF",
      Webpack: "#8DD6F9",
      Postman: "#FF6C37",
      Java: "#ED8B00",
      HTML5: "#E34F26",
      CSS3: "#1572B6",
    };
    return techColors[tech] || "#EC4899";
  };

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="w-full sm:max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold font-handwritten bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent pb-4">
            My Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            From intern to full-stack developer
          </p>
        </div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16">
              <div className="bg-gradient-to-br from-white/10 via-pink-500/5 to-purple-500/10 dark:from-gray-800/10 dark:via-pink-500/5 dark:to-purple-500/10 backdrop-blur-sm border border-pink-500/20 dark:border-pink-500/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-1">
                        {exp.company}
                      </h3>
                      <h4 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2 whitespace-nowrap">
                        {exp.role}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {exp.date}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        {exp.duration} • {exp.type}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    Key Milestones
                  </h5>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    Skills Gained
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => {
                      const IconComponent = getTechIcon(tech);
                      const color = getTechColor(tech);
                      return (
                        <div
                          key={techIndex}
                          className="group/tech flex items-center gap-1.5 bg-gradient-to-r from-white/10 to-transparent rounded-full px-3 py-1.5 border border-white/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105"
                        >
                          <IconComponent
                            className="w-3.5 h-3.5 group-hover/tech:scale-110 transition-transform duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
