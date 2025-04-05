import { useEffect, useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { NavBar } from "@/components/NavBar";
import { Loader } from "@/components/Loader";
import { Hero } from "@/components/Hero";

export const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans bg-background text-foreground transition-colors duration-500">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <NavBar />
            <main className="overflow-x-hidden">
              <Hero />
            </main>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};
