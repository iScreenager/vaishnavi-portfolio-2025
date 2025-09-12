import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section
      id="footer"
      className=" flex flex-col items-center gap-14 px-4 md:px-8 py-6">
      <div className="text-center text-sm text-black dark:text-red-50">
        <div className="flex items-center justify-center mb-4">
          <p className="font-handwritten text-lg mx-2">Made with</p>
          <FaHeart className="text-pink-500 text-lg animate-pulse" />
        </div>
        <p>&copy; {currentYear} Vaishnavi Rastogi. All rights reserved.</p>
      </div>
    </section>
  );
};
