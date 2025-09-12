import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaCheck,
} from "react-icons/fa";
import { Mail } from "lucide-react";
import Vaishnavi_rastogi_Resume from "../../public/Vaishnavi_rastogi_Resume.pdf";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Submitted Data:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      value: "rastogivaishnavi68@gmail.com",
      href: "mailto:rastogivaishnavi68@gmail.com",
      description: "I'll respond within 24 hours",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: FaPhone,
      title: "Call Me",
      value: "+91 9876543210",
      href: "tel:+919876543210",
      description: "",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Delhi, India",
      href: "#",
      description: "",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      href: "https://github.com/iScreenager",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/vaishnavi-rastogi",
      color: "hover:text-blue-600"
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      href: "https://instagram.com/vaishnavi_rastogi",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-handwritten bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent pb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    className="group flex items-center gap-4 p-4 bg-gradient-to-r from-white/10 via-pink-500/5 to-purple-500/10 dark:from-gray-800/10 dark:via-pink-500/5 dark:to-purple-500/10 backdrop-blur-sm border border-pink-500/20 dark:border-pink-500/10 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white text-lg" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-pink-500 transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {method.value}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {method.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="space-y-4 hidden lg:block">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Follow Me
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gradient-to-r from-white/10 to-transparent border border-white/20 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      >
                        <Icon className="text-lg" />
                      </a>
                    );
                  })}
                </div>
                
                <a
                  href={Vaishnavi_rastogi_Resume}
                  download="Vaishnavi_Rastogi_Resume.pdf"
                  onClick={handleDownload}
                  className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 text-sm font-medium"
                >
                  {downloaded ? (
                    <FaCheck className="text-xs" />
                  ) : (
                    <FaDownload className="text-xs" />
                  )}
                  <span>
                    {downloaded ? "Downloaded!" : "Resume"}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 via-pink-500/5 to-purple-500/10 dark:from-gray-800/10 dark:via-pink-500/5 dark:to-purple-500/10 backdrop-blur-sm border border-pink-500/20 dark:border-pink-500/10 rounded-2xl p-8 shadow-xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Have a project in mind? Let's discuss how we can work together.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500 text-sm" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500 text-sm" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div className="relative">
                  <FaCommentDots className="absolute left-4 top-4 text-pink-500 text-sm" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full pl-12 pr-4 pt-3 bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 focus:outline-none resize-none transition-all duration-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};