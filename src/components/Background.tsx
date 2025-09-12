const getRandomValue = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const Background = () => {
  const butterflies = Array.from({ length: 30 });

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-pink-50 dark:bg-gray-700 ">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-indigo-50/50 dark:from-gray-900/50 dark:via-purple-900/20 dark:to-indigo-900/20" />
      
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-pink-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-indigo-200/15 rounded-full blur-2xl animate-pulse delay-2000" />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-pink-200/15 rounded-full blur-2xl animate-pulse delay-3000" />
      
      {butterflies.map((_, index) => {
        const top = getRandomValue(0, 90);
        const left = getRandomValue(0, 90);
        const size = getRandomValue(70, 100);
        const opacity = getRandomValue(50, 90) / 100;
        const delay = getRandomValue(0, 20);

        return (
          <div
            key={index}
            className="absolute animate-float-slow"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              opacity,
              animationDelay: `${delay}s`,
            }}
          >
            {/* <Lottie animationData={animationData} loop autoplay /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Background;
