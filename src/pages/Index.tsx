import { useEffect, useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { NavBar } from "@/components/NavBar";
import { Loader } from "@/components/Loader";
import { DashBoard } from "@/components/DashBoard";
import { TechStack } from "@/components/TechStacks";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import Background from "@/components/Background";

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
              <Background/>
            <NavBar />
            <main className="overflow-x-hidden">
              <DashBoard />
              <TechStack />
              <Experience />
              <Projects />
              <Contact />
              <Footer />
            </main>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};
