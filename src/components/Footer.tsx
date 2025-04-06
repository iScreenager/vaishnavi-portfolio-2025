import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section
      id="project"
      className="bg-pink-50 dark:bg-gray-700 flex flex-col items-center gap-14 px-4 md:px-8 py-6">
      <div className="text-center text-sm text-black dark:text-red-50">
        <div className="flex items-center justify-center mb-4">
          <p className="font-handwritten text-lg mr-2">Made with</p>
          <Heart size={16} className=" text-pink-700 dark:text-pink-300" fill="#FFC2D1" />
        </div>
        <p>&copy; {currentYear} Vaishnavi Rastogi. All rights reserved.</p>
      </div>
    </section>
  );
};
