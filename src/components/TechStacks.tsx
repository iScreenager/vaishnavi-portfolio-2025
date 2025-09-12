import { 
  SiNodedotjs, 
  SiExpress, 
  SiNextdotjs, 
  SiMongodb, 
  SiGraphql, 
  SiVercel, 
  SiVite, 
  SiWebpack, 
  SiPostman, 
  SiFigma, 
  SiReactrouter, 
  SiShadcnui,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJest,
  SiGithub,
  SiFirebase,
  SiGoogle,
  SiGooglesearchconsole
} from "react-icons/si";

export const TechStack = () => {

  const techIcons = {
    "React.js": { icon: SiReact, color: "#61DAFB", bgColor: "bg-cyan-500/10", borderColor: "border-cyan-500/20" },
    "TypeScript": { icon: SiTypescript, color: "#3178C6", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
    "JavaScript": { icon: SiJavascript, color: "#F7DF1E", bgColor: "bg-yellow-500/10", borderColor: "border-yellow-500/20" },
    "Redux": { icon: SiRedux, color: "#764ABC", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/20" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4", bgColor: "bg-cyan-500/10", borderColor: "border-cyan-500/20" },
    "Material UI": { icon: SiReact, color: "#0081CB", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
    "CSS3": { icon: SiCss3, color: "#1572B6", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
    "HTML5": { icon: SiHtml5, color: "#E34F26", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/20" },
    "Node.js": { icon: SiNodedotjs, color: "#339933", bgColor: "bg-green-500/10", borderColor: "border-green-500/20" },
    "Next.js": { icon: SiNextdotjs, color: "#000000", bgColor: "bg-gray-800/10", borderColor: "border-gray-800/20" },
    "Express.js": { icon: SiExpress, color: "#000000", bgColor: "bg-gray-800/10", borderColor: "border-gray-800/20" },
    "RESTful APIs": { icon: SiReact, color: "#FF6B6B", bgColor: "bg-red-500/10", borderColor: "border-red-500/20" },
    "GraphQL": { icon: SiGraphql, color: "#E10098", bgColor: "bg-pink-500/10", borderColor: "border-pink-500/20" },
    "MongoDB": { icon: SiMongodb, color: "#47A248", bgColor: "bg-green-500/10", borderColor: "border-green-500/20" },
    "Java": { icon: SiReact, color: "#ED8B00", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/20" },
    "Git & GitHub": { icon: SiGithub, color: "#181717", bgColor: "bg-gray-800/10", borderColor: "border-gray-800/20" },
    "Firebase": { icon: SiFirebase, color: "#FFCA28", bgColor: "bg-yellow-500/10", borderColor: "border-yellow-500/20" },
    "Jest": { icon: SiJest, color: "#C21325", bgColor: "bg-red-500/10", borderColor: "border-red-500/20" },
    "Figma": { icon: SiFigma, color: "#F24E1E", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/20" },
    "Vercel": { icon: SiVercel, color: "#000000", bgColor: "bg-gray-800/10", borderColor: "border-gray-800/20" },
    "Vite": { icon: SiVite, color: "#646CFF", bgColor: "bg-indigo-500/10", borderColor: "border-indigo-500/20" },
    "Webpack": { icon: SiWebpack, color: "#8DD6F9", bgColor: "bg-cyan-500/10", borderColor: "border-cyan-500/20" },
    "Postman": { icon: SiPostman, color: "#FF6C37", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/20" },
    "Zustand": { icon: SiReact, color: "#FF6B6B", bgColor: "bg-red-500/10", borderColor: "border-red-500/20" },
    "React Router": { icon: SiReactrouter, color: "#CA4245", bgColor: "bg-red-500/10", borderColor: "border-red-500/20" },
    "Shadcn UI": { icon: SiShadcnui, color: "#000000", bgColor: "bg-gray-800/10", borderColor: "border-gray-800/20" },
    "Gemini AI": { icon: SiGoogle, color: "#4285F4", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
    "SEO": { icon: SiGooglesearchconsole, color: "#4285F4", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
    "Mobile-First": { icon: SiReact, color: "#61DAFB", bgColor: "bg-cyan-500/10", borderColor: "border-cyan-500/20" },
    "Performance": { icon: SiReact, color: "#FF6B6B", bgColor: "bg-red-500/10", borderColor: "border-red-500/20" }
  };

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      color: "from-pink-500 to-purple-500",
      borderColor: "border-pink-500/20",
      hoverColor: "hover:border-pink-500/40",
      shadowColor: "shadow-pink-500/20",
      skills: [
        { label: "React.js", proficiency: 95, description: "Component-based UI library" },
        { label: "Next.js", proficiency: 85, description: "React framework" },
        { label: "TypeScript", proficiency: 90, description: "Type-safe JavaScript" },
        { label: "JavaScript", proficiency: 95, description: "ES6+ Modern JavaScript" },
        { label: "Redux", proficiency: 85, description: "State management" },
        { label: "Tailwind", proficiency: 90, description: "Utility-first CSS" },
        { label: "Material UI", proficiency: 80, description: "React component library" },
        { label: "CSS3", proficiency: 90, description: "Advanced styling" },
        { label: "HTML5", proficiency: 95, description: "Semantic markup" },
        { label: "Zustand", proficiency: 80, description: "Lightweight state management" },
        { label: "React Router", proficiency: 85, description: "Client-side routing" },
        { label: "Shadcn UI", proficiency: 85, description: "Modern UI components" },
        { label: "Mobile-First", proficiency: 90, description: "Responsive design approach" },
        { label: "Performance", proficiency: 85, description: "Optimization techniques" },
      ]
    },
    backend: {
      title: "Backend & Full-Stack",
      color: "from-purple-500 to-indigo-500",
      borderColor: "border-purple-500/20",
      hoverColor: "hover:border-purple-500/40",
      shadowColor: "shadow-purple-500/20",
      skills: [
        { label: "Node.js", proficiency: 80, description: "Server-side JavaScript" },
        { label: "Express.js", proficiency: 75, description: "Web framework" },
        { label: "REST APIs", proficiency: 85, description: "API design" },
        { label: "GraphQL", proficiency: 70, description: "Query language" },
        { label: "MongoDB", proficiency: 75, description: "NoSQL database" },
      ]
    },
    tools: {
      title: "Tools & Technologies",
      color: "from-indigo-500 to-pink-500",
      borderColor: "border-indigo-500/20",
      hoverColor: "hover:border-indigo-500/40",
      shadowColor: "shadow-indigo-500/20",
      skills: [
        { label: "Git & GitHub", proficiency: 90, description: "Version control" },
        { label: "Firebase", proficiency: 85, description: "Backend services" },
        { label: "Jest", proficiency: 80, description: "Testing framework" },
        { label: "Figma", proficiency: 75, description: "Design tool" },
        { label: "Vercel", proficiency: 85, description: "Deployment platform" },
        { label: "Vite", proficiency: 90, description: "Build tool" },
        { label: "Webpack", proficiency: 70, description: "Module bundler" },
        { label: "Postman", proficiency: 80, description: "API testing" },
        { label: "Gemini AI", proficiency: 75, description: "AI integration" },
        { label: "SEO", proficiency: 80, description: "Search optimization" },
      ]
    }
  };
  
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center pt-16 lg:pt-0 px-4 sm:px-6 lg:px-8 relative">
      
      <div className="max-w-7xl mx-auto w-full">
        

        <div className="relative mb-12">
          <div className="relative mx-auto w-80 h-80 sm:w-96 sm:h-96 mb-12">
            <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-pink-500/40 to-purple-500/40 animate-spin shadow-2xl shadow-pink-500/20" style={{animationDuration: '20s'}}>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg shadow-pink-500/50 animate-pulse"></div>
            </div>
            
            <div className="absolute inset-4 rounded-full border border-gradient-to-r from-purple-500/30 to-indigo-500/30 animate-spin shadow-xl shadow-purple-500/20" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
              <div className="absolute -top-1 right-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg shadow-purple-500/50 animate-bounce"></div>
            </div>
            
            <div className="absolute inset-8 rounded-full border border-gradient-to-r from-indigo-500/20 to-pink-500/20 animate-spin" style={{animationDuration: '10s'}}>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full animate-ping"></div>
            </div>
            
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-white/10 via-pink-500/5 to-purple-500/10 dark:from-gray-800/10 dark:via-pink-500/5 dark:to-purple-500/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-2xl shadow-pink-500/10 flex flex-col items-center justify-center">
              <div className="text-center space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">
                  Full Stack
                </h3>

                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse delay-100 shadow-lg shadow-purple-500/50"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full animate-pulse delay-200 shadow-lg shadow-indigo-500/50"></div>
                </div>
              </div>
            </div>
            
            {[
              { skill: "React.js", position: "top-0 left-1/2", transform: "translate(-50%, -50%)", delay: "0s" },
              { skill: "TypeScript", position: "top-1/4 right-0", transform: "translate(50%, -50%)", delay: "0.5s" },
              { skill: "Node.js", position: "bottom-1/4 right-0", transform: "translate(50%, 50%)", delay: "1s" },
              { skill: "Next.js", position: "bottom-0 left-1/2", transform: "translate(-50%, 50%)", delay: "1.5s" },
              { skill: "Firebase", position: "bottom-1/4 left-0", transform: "translate(-50%, 50%)", delay: "2s" },
              { skill: "Tailwind CSS", position: "top-1/4 left-0", transform: "translate(-50%, -50%)", delay: "2.5s" }
            ].map((item, index) => {
              const techIcon = techIcons[item.skill as keyof typeof techIcons];
              const IconComponent = techIcon?.icon || SiReact;
              return (
                <div 
                  key={index}
                  className={`absolute ${item.position} transform ${item.transform} group cursor-pointer animate-bounce`}
                  style={{animationDelay: item.delay, animationDuration: '2s'}}
                >
                  <div className="backdrop-blur-sm border border-white/30 dark:border-gray-600/30 rounded-full px-4 py-2 sm:px-5 sm:py-3 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 flex items-center gap-2" style={{ backgroundColor: techIcon?.color + '20' }}>
                    <IconComponent 
                      className="w-4 h-4 sm:w-5 sm:h-5" 
                      style={{ color: techIcon?.color || '#61DAFB' }}
                    />
                    <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item.skill}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             
             <div className="space-y-4">
               <div className="text-center mb-6">
                 <h3 className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                   Frontend
                 </h3>
                 <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto"></div>
               </div>
               <div className="grid grid-cols-2 gap-3">
                 {skillCategories.frontend.skills.slice(0, 10).map((skill, index) => {
                   const techIcon = techIcons[skill.label as keyof typeof techIcons];
                   const IconComponent = techIcon?.icon || SiReact;
                   return (
                     <div key={index} className="group">
                       <div className={`${techIcon?.bgColor || 'bg-pink-500/10'} backdrop-blur-sm border ${techIcon?.borderColor || 'border-pink-500/20'} rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg cursor-pointer`}>
                         <div className="flex items-center justify-center gap-2 sm:gap-3">
                           <IconComponent 
                             className="w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" 
                             style={{ color: techIcon?.color || '#EC4899' }}
                           />
                           <span className="text-xs sm:text-base font-bold text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                             {skill.label}
                           </span>
                         </div>
                       </div>
                     </div>
                   );
                 })}
               </div>
             </div>

             <div className="space-y-4">
               <div className="text-center mb-6">
                 <h3 className="text-lg font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-2">
                   Backend
                 </h3>
                 <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto"></div>
               </div>
               <div className="grid grid-cols-2 gap-3">
                 {skillCategories.backend.skills.map((skill, index) => {
                   const techIcon = techIcons[skill.label as keyof typeof techIcons];
                   const IconComponent = techIcon?.icon || SiReact;
                   return (
                     <div key={index} className="group">
                       <div className={`${techIcon?.bgColor || 'bg-purple-500/10'} backdrop-blur-sm border ${techIcon?.borderColor || 'border-purple-500/20'} rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg cursor-pointer`}>
                         <div className="flex items-center justify-center gap-2 sm:gap-3">
                           <IconComponent 
                             className="w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" 
                             style={{ color: techIcon?.color || '#8B5CF6' }}
                           />
                           <span className="text-xs sm:text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                             {skill.label}
                           </span>
                         </div>
                       </div>
                     </div>
                   );
                 })}
               </div>
             </div>

             <div className="space-y-4">
               <div className="text-center mb-6">
                 <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-2">
                   Tools & Others
                 </h3>
                 <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto"></div>
               </div>
               <div className="grid grid-cols-2 gap-3">
                 {skillCategories.tools.skills.map((skill, index) => {
                   const techIcon = techIcons[skill.label as keyof typeof techIcons];
                   const IconComponent = techIcon?.icon || SiReact;
                   return (
                     <div key={index} className="group">
                       <div className={`${techIcon?.bgColor || 'bg-indigo-500/10'} backdrop-blur-sm border ${techIcon?.borderColor || 'border-indigo-500/20'} rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg cursor-pointer`}>
                         <div className="flex items-center justify-center gap-2 sm:gap-3">
                           <IconComponent 
                             className="w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" 
                             style={{ color: techIcon?.color || '#6366F1' }}
                           />
                           <span className="text-xs sm:text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                             {skill.label}
                           </span>
                         </div>
                       </div>
                     </div>
                   );
                 })}
               </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};
