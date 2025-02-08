import { motion } from "framer-motion";
import { animations } from "../utils/animations";

const HeroSection: React.FC = () => {
  return (
    <motion.section
      id="hero"
      className="w-full min-h-screen bg-light dark:bg-gradient-to-br dark:from-dark dark:to-gray-900 text-dark-light dark:text-light flex items-center justify-center px-6 relative"
      {...animations.fadeIn}
    >
      <div className="w-full max-w-7xl text-center">
        <motion.div className="mb-8" {...animations.scaleIn}>
          <img
            src="/avatar.png"
            alt="Christian Chenault"
            className="w-64 h-64 rounded-full mx-auto border-4 border-accent shadow-lg"
          />
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-dark dark:text-light">
          Hi, I'm <span className="text-accent">Christian Chenault</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Crafting immersive, modern, and user-friendly web experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <motion.a
            href="#projects"
            className="bg-accent text-white py-3 px-6 rounded-lg font-medium shadow-neon hover:bg-secondary hover:shadow-secondary transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="border border-accent text-accent py-3 px-6 rounded-lg font-medium hover:bg-accent hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      >
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="text-accent hover:text-secondary transition-colors flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll for more</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
