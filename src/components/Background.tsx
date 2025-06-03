import Lottie from "lottie-react";
import animationData from "../assets/butterfly.json";


const getRandomValue = (min:number, max:number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const Background = () => {
  const butterflies = Array.from({ length: 30 });

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-pink-50 dark:bg-gray-700  ">
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
            }}>
            <Lottie animationData={animationData} loop autoplay />
          </div>
        );
      })}
    </div>
  );
};

export default Background;
