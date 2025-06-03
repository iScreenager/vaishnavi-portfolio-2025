export const Experience = () => {
  const Experiences = [
    {
      company: "First American India",
      role: "Frontend Developer",
      date: "April 2023 - December 2024",
      description: `• Migrated the Transaction Portal Admin Page from ASP.Net MVC to React.js.
• Developed and maintained the Manage Users page with advanced filters and pagination.
• Integrated REST APIs and improved performance using lazy loading, memoization, and debouncing.
• Collaborated closely with UI/UX designers and managers to deliver seamless experiences.`,
    },
    {
      company: "My Digital Dude",
      role: "Frontend Developer Intern",
      date: "January 2023 - April 2023",
      description: `• Translated Figma designs into responsive, reusable components.
• Delivered clean and scalable code while learning modern frontend best practices.`,
    },
  ];

  return (
    <section
      id="experience"
      className="flex flex-col items-center px-4 md:px-8 py-6">
      <div className="text-center mb-10 ">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-400 font-handwritten mb-2">
          My Experience
        </h2>
      </div>

      <div className="relative border-l-2 sm:border-l-4 border-pink-300 dark:border-pink-500 pl-8 space-y-10 max-w-4xl mx-auto">
        {Experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative "
            style={{ animationDelay: `${idx * 200}ms` }}>
            <div className="absolute -left-5 top-2 w-5 h-5 bg-pink-500 dark:bg-pink-600 rounded-full border-4 border-white dark:border-gray-800 shadow-md" />
            <div className="ml-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                {exp.company}
              </h3>
              <h4 className="text-pink-500 text-base sm:text-lg font-medium mt-1">
                {exp.role}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 mb-3">
                {exp.date}
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
