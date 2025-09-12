import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

export const Loader = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Vaishnavi";
  const typingSpeed = 200;
  const cursorBlinkSpeed = 500;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, typingSpeed]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);
    return () => clearInterval(interval);
  }, [cursorBlinkSpeed]);

  return (
    <div className="absolute inset-0 flex items-center justify-center h-screen w-screen bg-pink-50 dark:bg-gray-700">
      {/* Background matching dashboard */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-indigo-50/50 dark:from-gray-900/50 dark:via-purple-900/20 dark:to-indigo-900/20" />

      {/* Background Elements matching dashboard */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-pink-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-indigo-200/15 rounded-full blur-2xl animate-pulse delay-2000" />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-pink-200/15 rounded-full blur-2xl animate-pulse delay-3000" />

      <div className="relative z-10 flex flex-col items-center space-y-12">
        <div className="relative">
          <div className="w-20 h-20 flex items-center justify-center">
            <FaHeart className="text-4xl text-pink-500 animate-heartbeat" />
            <div className="absolute inset-0 border-2 border-transparent border-t-pink-500/30 border-r-purple-500/30 rounded-full animate-spin"></div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold font-handwritten bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {currentText}
            <span
              className={`inline-block w-1 h-12 bg-gradient-to-b from-pink-500 to-purple-500 ml-2 ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100`}
            ></span>
          </h1>
        </div>
      </div>
    </div>
  );
};
