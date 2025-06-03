import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className=" min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-12 transition-all duration-500">
      <h4 className="text-5xl font-bold font-handwritten text-pink-400 text-center mb-12 drop-shadow-lg animate-bounce-slow">
        Contact Me
      </h4>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-gray-200 dark:bg-gray-600 rounded-3xl p-10 space-y-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500">
        <div className="relative">
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300 text-base animate-fade-in" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full pl-12 pr-4 py-3 bg-[#382a3f] text-white placeholder-gray-300 rounded-2xl border-none shadow-inner focus:ring-2 focus:ring-pink-300 focus:outline-none transition-all duration-300"
            required
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300 text-base animate-fade-in" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full pl-12 pr-4 py-3 bg-[#382a3f] text-white placeholder-gray-300 rounded-2xl border-none shadow-inner focus:ring-2 focus:ring-pink-300 focus:outline-none transition-all duration-300"
            required
          />
        </div>

        <div className="relative">
          <FaCommentDots className="absolute left-4 top-4 text-pink-300 text-base animate-fade-in" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={5}
            className="w-full pl-12 pr-4 pt-3 bg-[#382a3f] text-white placeholder-gray-300 rounded-2xl border-none shadow-inner focus:ring-2 focus:ring-pink-300 focus:outline-none resize-none transition-all duration-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-300 hover:bg-pink-400 text-black font-bold py-3 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <FaPaperPlane className="text-black animate-fly" /> Send Message
        </button>
      </form>
    </section>
  );
};
